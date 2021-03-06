const base64 = require('base64-arraybuffer')
import './Errors.js';
import WalletBubble from './WalletBubble';
import HTTPClient from './HTTPClient.js';
const IPFSURL = 'https://snapalgo-imgs.netlify.app/imgs' 
const importIcon = IPFSURL + '/import-wallet.svg'
const connectedGif = IPFSURL + '/connected.gif'
export class Wallet{
    constructor(){
      this.enabled = false;
      this.genisisHash = null;
      this.genisisId = null;
      this.enabledAccounts = [];
      this.accounts = []
      this.network = "";
      this.bubble = new WalletBubble();
      window.algorand = this;
    }
    async enable(opts){

      if(!opts){
        opts = {};
      }

      let IdTable = {
        "mainnet-v1.0":"wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=",
        "testnet-v1.0":	"SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=",
        "betanet-v1.0":	"mFgazF+2uRS1tMiL9dsj01hJGySEmPN28B/TjjvpVW0="
      };
      console.log("here")
      try{
        console.log("inside try")
        const thing = await ethereum.request({
          method: 'wallet_enable',
          params: [{
            wallet_snap: { ["npm:algorand"]: {} },
          }]
        })
        console.log('yes');
        console.log(thing);
      }
      catch(e){
        if(e.code === 4001){
          console.log("rejected");
          return;
        }
        else{
          alert("you must install metamask flask to use this libary")
          throw(e);
        }
      }
      this.accounts = await ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand", {
          method: 'getAccounts',
        }]
      })
      console.log("this.accounts COMPLETED!");
      console.log(this.accounts)
      let genisisIdProvided = false;
      let genisisHashProvided = false;
      let accountsProvided = false;
      let matchVerified = false;
      if(opts.hasOwnProperty('genisisID')){
        if(!(opts.genisisId in IdTable)){
          throw({code: 4300, "message": "network is not supported"});
        }
        this.genisisId = opts.genisisId;
        genisisIdProvided = true;
        
      }
      
      if(opts.hasOwnProperty('genisisHash')){
        if(!Object.values(IdTable).includes(opts.genisisHash)){
          throw({code: 4300, "message": "network is not supported"});
        }
        this.genisisHash = opts.genisisHash;
        genisisHashProvided = true;
      }
      
      if(opts.hasOwnProperty('accounts')){
        this.enabledAccounts = opts.accounts;
        accountsProvided = true;
      }
      if(genisisIdProvided && genisisHashProvided){
        if(IdTable[this.genisisId] !== this.genisisHash){
          throw({code: 4300, "message": "network Id and Network Hash do not match"});
        }
      }
      if(genisisIdProvided && !genisisHashProvided){
        this.genisisHash = IdTable[this.genisisId];
        genisisHashProvided = true;
      }
      if(genisisHashProvided && !genisisIdProvided){
        this.genisisId = Object.keys(IdTable).find(key => IdTable[key] === this.genisisHash);
        genisisIdProvided = true;
      }
      if(!genisisIdProvided || !genisisHashProvided || !accountsProvided){
        let masterDiv = document.createElement('div');
        let importWalletButton = document.createElement('img');
        let importDiv = document.createElement('div');
        importDiv.style = "display:flex; justify-content:right;";
        masterDiv.appendChild(importDiv);
        importWalletButton.src = importIcon;
        importWalletButton.style.width = "50px";
        importWalletButton.style.height = "50px";
        importWalletButton.style.cursor = "pointer";
        importWalletButton.style.margin = "5px";
        importWalletButton.addEventListener('click', ()=>{window.open("https://snapalgo.com/importaccount", "_blank")})
        importDiv.appendChild(importWalletButton);
        let megaDiv = document.createElement('div');
        megaDiv.style = "display:flex; justify-content:center; text-align: center; transform: translateY(-10%);";
        let mainDiv = document.createElement('div');
        
        mainDiv.style = "display:flex; justify-content:center; flex-direction: column; text-align: center;";
        megaDiv.appendChild(mainDiv);
        masterDiv.appendChild(megaDiv);
        
        if(!genisisIdProvided || !genisisHashProvided){
          let networkTitle = document.createElement('p');
          networkTitle.innerHTML = "Select a Network";
          mainDiv.appendChild(networkTitle);
          this.networkSelect = document.createElement('select');
          this.networkSelect.style = "width: 200px; height: 25px; text-align: center;";
          this.networkSelect.innerHTML = Object.keys(IdTable).map(key => `<option value="${key}">${
            key.split('-')[0][0].toUpperCase() //get just the network name and capitalize the first letter
            +
            key.split('-')[0].slice(1) //combine with the rest of the network name
          }</option>`).join('');
          mainDiv.appendChild(this.networkSelect);
        }
        if(!accountsProvided){
          let accountsTitle = document.createElement('p');
          accountsTitle.innerHTML = "Select an Account";
          mainDiv.appendChild(accountsTitle);
          this.accountSelect = document.createElement('select');
          this.accountSelect.style = "width: 200px; height: 25px; text-align: center;";
          const Addrs = Object.keys(this.accounts)
          this.accountSelect.innerHTML = Addrs.map((addr)=>`<option value="${addr}">${this.accounts[addr].name}</option>`).join("");
          mainDiv.appendChild(this.accountSelect);
        }
        let center = document.createElement('center');
        mainDiv.appendChild(document.createElement('br'));
        
        let connectButton = document.createElement('button');
        connectButton.innerHTML = "Connect";
        const selectFunc = () => {
          if(this.networkSelect){
            this.genisisId = this.networkSelect.value;
            this.genisisHash = IdTable[this.networkSelect.value];
            
          }
          if(this.accountSelect){
            this.enabledAccounts = [this.accountSelect.value];
            this.account = this.accountSelect.value;
          }
          this.#connect();
        }
        connectButton.addEventListener('click', selectFunc.bind(this));
        connectButton.style = "height: 35px; font-size: 15px;";
        connectButton.className = "snapAlgoDefaultButton";
        center.appendChild(connectButton);
        mainDiv.appendChild(center);
        this.bubble.setElement(masterDiv);
        this.bubble.open();
      }
      
          
          
    }
      
    async #connect(){
      this.bubble.importAccounts([this.accounts[this.enabledAccounts[0]]]);
      this.bubble.importNetwork(this.genisisId);
      this.enabled = true;
      this.bubble.open({
        html:`
          <center>
            <p>Connected</p>
            <img width="150px" height="150px" src="${connectedGif}"/>
          </center>`,
          height: 250
      })
      await ethereum.request({
        method: 'wallet_invokeSnap',
        params: ['npm:algorand', {
          method: 'setAccount',
          address: 	this.enabledAccounts[0]
        }]        
      })
      this.bubble.walletUi.screen = 'base';
      await this.bubble.preLoad();
      await setTimeout(()=>this.bubble.close(), 500);
    }

    

    #formatError(error){
      let err = error.message.split("\n");
      let code = err[0];
      let msg = err[1];
      throw({message: msg, code: code});
    }
  
    
    async signAndPostTxns(walletTransactions){
      try{
        return await ethereum.request({
          method: 'wallet_invokeSnap',
          params: ["npm:algorand", {
            method: 'signAndPostTxns',
            txns: walletTransactions
          }]
        })
      }
      catch(error){
        this.#formatError(error);
      }
    }
    getAlgodv2Client(){
      const networkTable = {
        "mainnet-v1.0": "mainnet",
        "testnet-v1.0": "testnet",
        "betanet-v1.0": "betanet"
      }
      const network = networkTable[this.genisisId];
      return new HTTPClient().get("algod", network);
    }
      
    getIndexerClient(){
      const networkTable = {
        "mainnet-v1.0": "mainnet",
        "testnet-v1.0": "testnet",
        "betanet-v1.0": "betanet"
      }
      const network = networkTable[this.genisisId];
      return new HTTPClient().get("index", network);
    }
    async signTxns(walletTransactions){
      if(!this.enabled){
        throw("not enabled");
      }
      try{
        return await ethereum.request({
          method: 'wallet_invokeSnap',
          params: ["npm:algorand", {
            method: 'signTxns',
            txns: walletTransactions
          }]
        })
      }
      catch(error){
        this.#formatError(error);
      }
      
    }
    async postTxns(stxns){
      try{
        return await ethereum.request({
          method: 'wallet_invokeSnap',
          params: ["npm:algorand", {
            method: 'postTxns',
            stxns: stxns
          }]
        })
      }
      catch(error){
        this.#formatError(error);
      }
    }

    openBubble(){
      
    }

    encodeTxn(txn){
      const msgpack = require('./encoding.js');
      const b64 = require('base64-arraybuffer');
      //will be implemented later
      let obj = txn.get_obj_for_encoding()
      obj = msgpack.encode(obj);
      return b64.encode(obj);
    }

    async EZsign(txn){
      const b64 = require('base64-arraybuffer');
      txn = [{txn:this.encodeTxn(txn)}];
      console.log(txn);
      let signedTxs = await this.signTxns(txn);
      console.log("signedTxs");
      console.log(signedTxs);
      return Array.from(signedTxs.map(stxB64 => b64.decode(stxB64).buffer));
    }

    base64Encode(arraybuffer){
      console.log("recieved ArrayBuffer is ")
      console.log(arraybuffer)
      const b64 = require('base64-arraybuffer');
      const base64Output = b64.encode(arraybuffer);
      console.log("base64 output is ...");
      console.log(base64Output);
      return base64Output;
    }

    base64Decode(arraybuffer){
      console.log(arraybuffer);
      const b64 = require('base64-arraybuffer');
      arraybuffer = b64.decode(arraybuffer);
      return new Uint8Array(arraybuffer);
    }

    async EZsignAndPost(txn){
      const b64 = require('base64-arraybuffer');
      txn = [{txn:this.encodeTxn(txn)}];
      return this.signAndPostTxns(txn);
    }

    async EZsignSmartSig(logicSigAccount){
      const msgpack = require('./encoding.js');
      let EncodedLogicSigAccount = this.base64Encode(logicSigAccount.toByte());
      try{
        const EncodedSignedAccount = await ethereum.request({
          method: 'wallet_invokeSnap',
          params: ["npm:algorand", {
            method: 'signLogicSig',
            logicSigAccount: EncodedLogicSigAccount,
          }]
        })
      }
      catch(error){
        this.#formatError(error);
      }
      let encodedMsgPack = this.base64Decode(EncodedSignedAccount);
      let decodedMsgPack = msgpack.decode(encodedMsgPack);
      console.log(decodedMsgPack);
      logicSigAccount.sigkey = decodedMsgPack.sigkey;
      logicSigAccount.lsig.sig = decodedMsgPack.lsig.sig;
      console.log(logicSigAccount)
      return logicSigAccount
      
    }
  
  

  }
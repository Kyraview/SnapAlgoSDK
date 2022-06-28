const base64 = require('base64-arraybuffer')
import './Errors.js';
import WalletBubble from './WalletBubble';
import connectedGif from './images/connected.gif';
import HTTPClient from './HTTPClient.js';

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
          Swal.fire("you must install metamask flask to use this libary")
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
        this.genisisId = opts.genisisId;
        genisisIdProvided = true;
      }
      
      if(opts.hasOwnProperty('genisisHash')){
        this.genisisHash = opts.genisisHash;
        genisisHashProvided = true;
      }
      
      if(opts.hasOwnProperty('accounts')){
        this.enabledAccounts = opts.accounts;
        accountsProvided = true;
      }

      
      
      if(genisisHashProvided && genisisIdProvided){
        if(IdTable.hasOwnProperty(this.genisisId)){
          if(IdTable[this.genisisId] == this.genisisHash){
            matchVerified = true;
          }
          if(IdTable[this.genisisId] !== this.genisisHash){
            //revise error later
            throw("error")
          }
        }
        if(Object.values(IdTable).includes(this.genisisHash)){
          //hash is valid for official network but genisis id does not match
          if(!matchVerified){
            throw("error")
          }
        }
      }
      if(genisisIdProvided && !genisisHashProvided){
        if(IdTable.hasOwnProperty(this.genisisId)){
          this.genisisHash = IdTable[this.genisisId]
        }
        else{
          console.log("unknown network")
        }
      }
      if(genisisHashProvided && !genisisHashProvided){
        let keys = Object.keys(IdTable);
        let keyFound = false;
        for(let i = 0; i<keys.length; i++){
          if(IdTable[keys[i]] === this.genisisHash){
            this.genisisId = keys[i];
            keyFound = true;
            break;
          }
        }
        if(!keyFound){
          console.log("unknown network")
        }
      }
      
      if(!genisisHashProvided && !genisisIdProvided && !accountsProvided){
        const Accounts = this.accounts
        const Addrs = Object.keys(Accounts)
        console.log(this)
        console.log(this.bubble);
        const connectModal = await this.bubble.modal({"html":
          `
          <center>
          <p style="text-align: center;">Select a Network</p>
          
          <select class="swal2-select" id="snapAlgoNetworkSelect">
            <option value="mainnet-v1.0">Mainnet</option>
            <option value="testnet-v1.0">Testnet</option>
            <option value="betanet-v1.0">Betanet</option>
          </select>
          
          <p style="text-align:center;">Select an Account</p>
            <select class="swal2-select" id="snapAlgoAccountSelect">
              ${Addrs.map((addr)=>`<option value="${addr}">${Accounts[addr].name}</option>`).join("")}
            </select>
          </center>`,
          "title": "Select Network and Account",
          "height":300,
          callback:()=>{
            let network = document.getElementById("snapAlgoNetworkSelect").value;
            let account = document.getElementById("snapAlgoAccountSelect").value;
            return {"network":network, "account":account};
          },
          confirmText: "Connect"
      });
          console.log(connectModal);
          console.log(await connectModal.canceled);
          if(await connectModal.canceled){
            console.log("here")
            throw("user Reject Connection");
          }
          console.log(connectModal);
          console.log(await connectModal);
          this.genisisId = await connectModal.data.network;
          this.genisisHash = IdTable[ await this.genisisId]
          this.enabledAccounts = [await connectModal.data.account];
          this.bubble.importAccounts([this.accounts[this.enabledAccounts[0]]]);
          this.bubble.importNetwork(this.genisisId);
          this.enabled = await connectModal.confirmed
          this.bubble.open({
            html:`
            <center>
              <p>Connected</p>
              <img width="150px" height="150px" src="${connectedGif}"/>
            </center>`,
            height: 250
          })
          this.bubble.preLoad();
          setTimeout(
            ()=>{
              //close the screen then set screen to the wallet screen
              //requires binding to the bubble
              this.bubble.close()
              .then(this.bubble.showWalletScreen.bind(this.bubble))
              
            }, 
            700 //leave connected message on for 700ms, and uses this time to load price data for the wallet screen
          )
      }
      


    }
  
    
    signAndPostTxns(walletTransactions){
      return await ethereum.request({
        method: 'wallet_invokeSnap',
        params: [snapId, {
          method: 'signAndPostTxns',
          txns: walletTransactions
        }]
      })
    }
    getAlgorandV2Client(){
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
      return await ethereum.request({
        method: 'wallet_invokeSnap',
        params: [snapId, {
          method: 'signTxns',
          txns: walletTransactions
        }]
      })
      
    }
    postTxns(stxns){
      return await ethereum.request({
        method: 'wallet_invokeSnap',
        params: [snapId, {
          method: 'signTxns',
          stxns: stxns
        }]
      })
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
      let signedTxs = await this.signTxns(txn);
      return signedTxs.map(stxB64 => b64.decode(stxB64).buffer)
    }

    async EZsignAndPost(txn){
      const b64 = require('base64-arraybuffer');
      txn = [{txn:this.encodeTxn(txn)}];
      return this.signAndPostTxns(txn);
    }
  
  

  }
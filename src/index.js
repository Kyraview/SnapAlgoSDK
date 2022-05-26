import Swal from 'sweetalert2'
import './Errors.js';
import WalletBubble from './WalletBubble';
import connectedGif from './images/connected.gif';
export class Wallet{
    constructor(){
      this.enabled = false;
      this.genisisHash = null;
      this.genisisId = null;
      this.enabledAccounts = [];
      this.accounts = []

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
              .then(this.bubble.showWalletScreen.bind(this.bubble));
            }, 
            700 //leave connected message on for 700ms, and uses this time to load price data for the wallet screen
          )
      }
      


    }
  
    
    signAndPostTxns(){
      
    }
    getAlgorandV2Client(){
      return new Promise((resolve)=>{
        let baseHTTPClient = {}
        baseHTTPClient.get = (relativePath, query, requestHeaders) => {
            console.log("executing get")
            relativePath = "/algod"+relativePath;
            console.log(relativePath)
            console.log(query)
            console.log(requestHeaders)
            if(query){
              query = new URLSearchParams(query).toString();
              if(query.length > 0){
                query = "?"+query;
              }
              console.log(query);
              
            }
            else{
              query = ''
            }
            if(!requestHeaders){
              requestHeaders = {}
            }
            return ethereum.request({
                method: 'wallet_invokeSnap',
                params:[
                    'npm:algorand',
                    {
                        'method': 'queryServer',
                        'relativePath': relativePath,
                        'query': query,
                        'requestHeaders': requestHeaders,
                        "httpMethod": "get"
                    }
                ]
            }).then((res) => {
              console.log(res);
              let data = res.data.data;
              res.body = new Uint8Array(data);
              delete res.data
              console.log(res);
              return res;
            })
        }
        
        baseHTTPClient.post = (relativePath, data, query, requestHeaders) => {
            relativePath = "/algod"+relativePath
            return window.etherium.request({
                method: 'wallet_invokeSnap',
                params:[
                    snapId,
                    {
                        'relativePath': relativePath,
                        'data': data,
                        'query': query,
                        'requestHeaders': requestHeaders,
                        "httpMethod": "POST"
                    }
                ]
            });
        }
       
        baseHTTPClient.delete = (relativePath, data, query, requestHeaders) => {
          relativePath = "/algod"+relativePath
            return window.etherium.request({
                method: 'wallet_invokeSnap',
                params:[
                    snapId,
                    {
                        'relativePath': relativePath,
                        'data': data,
                        'query': query,
                        'requestHeaders': requestHeaders,
                        "httpMethod": "DELETE"
                    }
                ]
            })
        }
        resolve(baseHTTPClient)
        

      })

    }
      
    getIndexerClient(){
      
    }
    signTxns(){
      
    }
    postTxns(){
      
    }

    openBubble(){
      
    }
  
  

  }
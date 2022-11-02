
import ReceiveScreen from './screens/ReceiveScreen';
import SendScreen from './screens/SendScreen';
import LedgerScreen from './screens/LedgerScreen';
import BaseScreen from './screens/BaseScreen';
import AssetScreen from './screens/AssetScreen';
import AccountScreen from './screens/AccountScreen';
import ExchangeScreen from './screens/ExchangeScreen';

export default class WalletUI{
    
    constructor(wallet){
        this.wallet = wallet;
        this.price = null;
        this.userBalance = null;
        this.transactions = null;
        this.screen = "base";
        this.assets = null;
        this.baseScreen = new BaseScreen(this, this.wallet);
        this.sendScreen = new SendScreen(this, this.wallet);
        this.receiveScreen = new ReceiveScreen(this, this.wallet);
        this.ledgerScreen = new LedgerScreen(this, this.wallet);
        this.assetScreen = new AssetScreen(this, this.wallet);
        this.accountscreen = new AccountScreen(this, this.wallet);
        this.exchangeScreen = new ExchangeScreen(this, this.wallet);
    }

    async preLoad(){
        
        let price = fetch("https://api.coincap.io/v2/assets/algorand" ,{
            method: 'GET',
            redirect: 'follow'
          })
        .then((res)=>res.text())
        .then((text)=>{
          this.price = Number(JSON.parse(text).data.priceUsd)
        })
        .catch((error)=>{
            console.log(error);
            this.price = 0;
        });
        let balance = window.ethereum.request({
            method:  'wallet_invokeSnap',
            params: ['npm:algorand', {
              method:  'getBalance',
              params:{
                testnet:  this.wallet.testnet
              }
            }]
          })
          .then((balance)=>{
            this.userBalance = balance;
          })
          .catch(console.log);
        let transactions = this.preLoadTransactions();
        let assets = this.preLoadAssets();
        return await Promise.all([price, balance, transactions, assets])
        
        
    }

    async preLoadTransactions(){
        return await window.ethereum.request({ method: 'wallet_invokeSnap', 
            params: ['npm:algorand',
                {
                    method: 'getTransactions',
                    params:{
                        testnet: this.wallet.testnet
                    }
                }
            ] 
        }).then((result)=>{
            this.transactions = result;
            return result;
        })
    }

    async preLoadAssets(){
        const result = await window.ethereum.request({ method: 'wallet_invokeSnap',
            params: ['npm:algorand',
                {
                    method: 'getAssets',
                    params:{
                        testnet: this.wallet.testnet
                    }
                }
            ]
        })

        const algo = {amount:this.userBalance, "asset-id": 0, asset: [{
            "index": 0,
            "asset-id": 0,
            deleted: false,
            "created-at-round": 0,
            "params": {
                decimals: 6,
                name: "Algorand",
                "unit-name": "Algo",                    
            }
        }]};

        result.unshift(algo);
        
        this.assets = result;
        console.log(this.assets);
        return result;
        
    }


    toggleReceiveScreen(){
        if(this.screen == "receive"){
            this.screen = "base";
            this.wallet.render(this.getScreen());
        }
        else{
            this.screen = "receive";
            this.receiveScreen.render();
            //this.#generateReceiveScreen();
        }
    }

    toggleSendScreen(){
        if(this.screen == "send"){
            this.screen = "base";
            this.wallet.render(this.getScreen());
        }
        else{
            this.screen = "send";
            this.sendScreen.render();
        }
    }

    toggleExchangeScreen(){
        if(this.screen === "exchange"){
            this.screen = "base";
            this.wallet.render(this.getScreen());
        }
        else{
            this.screen = "exchange";
            this.exchangeScreen.render();
        }
    }

    toggleLedgerScreen(){
        if(this.screen == "ledger"){
            this.screen = "base";
            this.wallet.render(this.getScreen());
        }
        else{
            this.screen = "ledger";
            this.ledgerScreen.render();
        }
    }

    toggleAccountScreen(){
        if(this.screen == "account"){
            this.screen = "base";
            this.wallet.render(this.getScreen());
        }
        else{
            this.screen = "account";
            this.accountscreen.render()
        }
    }

    toggleAssetScreen(){
        if(this.screen == "assets"){
            this.screen = "base";
            this.wallet.render(this.getScreen());
        }
        else{
            this.screen = "assets";
            this.assetScreen.render();
        }
    }

    renderScreen(){
        console.log("rendering screen");
        if(this.screen == "base"){
            let screen = this.getScreen();
            screen.silent = true;
            this.wallet.render(screen);
        }
        else if(this.screen === "receive"){
            this.receiveScreen.render({silent: true});
        }
        else if(this.screen === "send"){
            this.sendScreen.render({silent:true});
        }
        else if(this.screen === "ledger"){
            this.ledgerScreen.render({silent:true});
        }
        else if(this.screen === 'account'){
            this.accountscreen.render({silent:true});
        }
        else if(this.screen === "exchange"){
            this.exchangeScreen.render();
        }
        else{
            console.log("no such screen");
        }
    } 

      
    getScreen(){
        return this.baseScreen.render();
    }
}
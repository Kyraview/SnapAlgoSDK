

import QRCode from 'qrcode'
import ReceiveScreen from './screens/ReceiveScreen';
import SendScreen from './screens/SendScreen';
import LedgerScreen from './screens/LedgerScreen';
import BaseScreen from './screens/BaseScreen';
import AssetScreen from './screens/AssetScreen';
import AccountScreen from './screens/AccountScreen';

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
        console.log("config wallet ui constructor");
        console.log(this.baseScreen);
        console.log(this.sendScreen);
        console.log(this.receiveScreen);
        console.log(this.ledgerScreen);
        

    }

    async preLoad(){
        console.log("wallet Screen preLoad");
        
        let price = fetch("https://api.coingecko.com/api/v3/simple/price?ids=algorand&vs_currencies=usd")
        .then((res)=>res.text())
        .then((text)=>{
          this.price = Number(JSON.parse(text).algorand.usd)
        })
        let balance = window.ethereum.request({
            method:  'wallet_invokeSnap',
            params: ['npm:algorand', {
              method:  'getBalance',
              testnet:  this.wallet.testnet
            }]
          })
          .then((balance)=>{
            console.log(balance);
            console.log(this);
            console.log("in balance");
            this.userBalance = balance;
          })
          .catch(console.log);
        let transactions = this.preLoadTransactions();
        let assets = this.preLoadAssets();
        return await Promise.all([price, balance, transactions, assets])
        
        
    }

    preLoadTransactions(){
        return window.ethereum.request({ method: 'wallet_invokeSnap', 
            params: ['npm:algorand',
                {
                    method: 'getTransactions',
                    testnet: this.wallet.testnet
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
                    testnet: this.wallet.testnet
                }
            ]
        })
        
        console.log("preload assets");
        
        this.assets = result;
        console.log(this.assets);
        console.log(this.assets);
        return result;
        
    }


    toggleReceiveScreen(){
        if(this.screen == "receive"){
            this.screen = "base";
            this.wallet.render(this.getScreen());
        }
        else{
            console.log("toggle receive");
            console.log(this.receiveScreen);
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
        console.log(this.price)
        console.log(this.userBalance)
        if(this.screen == "base"){
            let screen = this.getScreen();
            screen.silent = true;
            console.log("refresh Screen");
            this.wallet.render(screen);
        }
        else if(this.screen == "receive"){
            this.receiveScreen.render({silent: true});
        }
        else if(this.screen == "send"){
            this.sendScreen.render({silent:true});
        }
        else if(this.screen == "ledger"){
            this.ledgerScreen.render({silent:true});
        }
        else if(this.screen == 'account'){
            this.accountscreen.render({silent:true});
        }
    } 

      
    getScreen(){
        return this.baseScreen.render();
    }
}
import copyImg from './images/copy.png';
import sendImg from './images/send.png';
import qrImg from './images/qr.png';
import logImg from './images/log.png';
import pasteImg from './images/paste.png';
import QRCode from 'qrcode'


export default class WalletScreen{

    constructor(walletBubbleInstance){
        this.wallet = walletBubbleInstance;
        this.subScreen = null;
        this.userBalance = "";
        this.price = "";
        console.log("wallet screen created");
        console.log(this.wallet);
    }

    #createImgButton(img){
        let button = document.createElement('button');
        button.style =  " color:white; width:40px; height:40px; border-radius: 100%;  border: white; cursor: pointer; margin: 5px;";
        let buttonImg = document.createElement('img');
        buttonImg.src = img;
        buttonImg.style = "width: 20px; height: 20px; margin: auto;";
        button.className = "snapAlgoWalletButton";
        button.appendChild(buttonImg);
        return button;
    }

    #createButton(text){
        let button = document.createElement('button');
        button.innerHTML = text;
        button.style =  "background-color:white; color:black; width:80px; height:30px; border-radius: 20px;  border: white; cursor: pointer;"; 
        button.className = "snapAlgoWalletButton";
        return button;

    }

    
    preLoad(){
        console.log("wallet Screen preLoad");
        return fetch("https://api.coingecko.com/api/v3/simple/price?ids=algorand&vs_currencies=usd")
        .then((res)=>res.text())
        .then((text)=>{
          let price = Number(JSON.parse(text).algorand.usd)
          return window.ethereum.request({
            method:  'wallet_invokeSnap',
            params: ['npm:algorand', {
              method:  'getBalance',
              testnet:  this.wallet.testnet
            }]
          }).then((balance)=>{
            console.log(balance);
            console.log(this);
            console.log("in balance");
            this.userBalance = balance;
            this.price = price;
            
            return {price: price, balance: balance};
          });
          
        })
      }

    async #generateSendScreen(){
        let holder = document.createElement("div");
        let container = document.createElement('div');
        container.style = "margin-left: 25px; margin-right: 25px;";
        holder.appendChild(container);


        let sendDiv = document.createElement('div');
        sendDiv.style = "display:flex; justify-content: center;";
        holder.appendChild(document.createElement('br'));
        let sendAddresLabel = document.createElement('p');
        sendAddresLabel.innerHTML = "recipient address";
        container.appendChild(sendAddresLabel);
        container.appendChild(sendDiv);

        let sendAddress = document.createElement('input');
        sendAddress.maxLength="58";
        sendAddress.style = "width: 100%; border-radius: 5px; font-family: monospace;";
        sendAddress.id = "SnapAlgoWalletSendAddress";
        sendDiv.appendChild(sendAddress);
        let pasteButton = document.createElement('img');
        pasteButton.src = pasteImg;
        pasteButton.id = "SnapAlgoWalletSendPasteButton";
        pasteButton.style = "width: 20px; border: white; cursor: pointer; background-color: white; border-radius: 100%; padding:3px;";
        sendDiv.appendChild(pasteButton);
        let sendAmountLabel = document.createElement('p');
        sendAmountLabel.innerHTML = "amount";
        container.appendChild(sendAmountLabel);
        let amount = document.createElement('input');
        amount.type = "number";
        amount.style = "width: 200px; border-radius: 5px; font-family: monospace; font-size: 20px;";
        amount.id = "SnapAlgoWalletSendAmount";
        container.appendChild(amount);
        container.appendChild(document.createElement('br'));
        container.appendChild(document.createElement('br'));
        const sendButtonDiv = document.createElement('div');
        sendButtonDiv.style = "display:flex; justify-content: center;";
        container.appendChild(sendButtonDiv);
        let sendButton = this.#createButton("send");
        sendButton.id = "SnapAlgoWalletSendButton";
        const sendFunction = () => {
            const out = ()=>{
                console.log("send button clicked");
                let sendAddress = document.getElementById("SnapAlgoWalletSendAddress").value;
                let sendAmount = document.getElementById("SnapAlgoWalletSendAmount").value;
                console.log(this.wallet.testnet);
                if(sendAddress.length > 0 && sendAmount > 0){
                    return window.ethereum.request({
                        method:  'wallet_invokeSnap',
                        params: ['npm:algorand', {
                            method:  'transfer',
                            testnet:  this.wallet.testnet,
                            to: sendAddress,
                            amount: sendAmount
                        }]
                    });
                }
                else{
                    console.log("invalid input");
                }
            }
            console.log(out);
            return out;
        }


        sendButtonDiv.appendChild(sendButton);
        return {
            'html':this.updateWalletScreen()+holder.innerHTML,
            'opts': {height: 400, width: 600, EventListeners: [{'id':'SnapAlgoWalletSendButton', 'callback': sendFunction()}]}
        }
    }
    
    async #generateReceiveScreen(){
        
        return new Promise(async (resolve)=>{
          let holder = document.createElement("div");
        
          let addressQR = (await QRCode.toDataURL(this.wallet.accounts[0].addr));
          
          let recDiv = document.createElement('div');
          recDiv.style = "display:flex; justify-content: center;";
          holder.appendChild(document.createElement('br'));
          holder.appendChild(document.createElement('br'));
          holder.appendChild(recDiv);

          let qrCodeImage = document.createElement('img');
          qrCodeImage.src = addressQR;
          qrCodeImage.style = "width: 150px; height: 150px; margin-left: 10px;";
          recDiv.appendChild(qrCodeImage);

          let addressDiv = document.createElement('div');
          addressDiv.style = "display: flex; flex-direction: column; margin-left: 10px; width: 150px;";
          let address = document.createElement('p');
          address.style = "font-size: 11px; word-break: break-all;";
          address.innerHTML = this.wallet.accounts[0].addr;
          let copyButton = document.createElement('button');
          copyButton.id = "SnapAlgoWalletRecieveCopyButton";
          const copyAddressFactory = (address)=>{
            return ()=>{
                const addr = address
                navigator.clipboard.writeText(addr)
            }
          }
          copyButton.style = "width: 100%;  border: white; cursor: pointer;";
          copyButton.innerHTML = "Copy Address";
          addressDiv.appendChild(address);
          addressDiv.appendChild(copyButton);
          recDiv.appendChild(addressDiv);
          let baseHtml = this.updateWalletScreen();
          resolve({
                  'html':baseHtml+holder.innerHTML, 
                  'opts':{EventListeners: [{id:'SnapAlgoWalletRecieveCopyButton', callback: copyAddressFactory(this.wallet.accounts[0].addr)}],
                          height: 350}
          });
        
        });
    }

    render(html, opts){
        let height = 300;
        if(!opts){
            opts = {};
        }
        if(!opts.hasOwnProperty('EventListeners')){
            opts.EventListeners = [];
        }
        if(!html){
            html = this.updateWalletScreen();
        }
        if(opts.hasOwnProperty("height")){
            height = opts.height;
        }
        let width = 450;
        if(opts.hasOwnProperty("width")){
            width = opts.width;
        }
        console.log(this.wallet.setHtml);
        this.wallet.setHtml(html);
        this.#createWalletScreenEventListeners();
        if(opts.EventListeners.length > 0){
            for(let i = 0; i < opts.EventListeners.length; i++){
                let event = 'click';
                if(opts.EventListeners[i].hasOwnProperty('event')){
                    event = opts.EventListeners[i].event;
                }
                document.getElementById(opts.EventListeners[i].id).addEventListener(event, opts.EventListeners[i].callback);
            }
        }
        
        this.wallet.setWidth(width);
        this.wallet.setHeight(height);


    }

    #createWalletScreenEventListeners(){
        console.log("creating event listeners");
        console.log(document.getElementById("SnapAlgoWalletreceiveButton"));
        document.getElementById("SnapAlgoWalletreceiveButton").addEventListener('click', async ()=>{ 
          if(this.subScreen === "receive"){
            this.subScreen = "null";
            let html = this.updateWalletScreen();
            this.render(html, {height: 200});
          }
          else{
            this.subScreen = "receive";
            let html = await this.#generateReceiveScreen();
            this.render(html.html, html.opts);
          }
        });
        document.getElementById("SnapAlgoWalletSendButton").addEventListener('click', async ()=>{
            if(this.subScreen === "send"){
                this.subScreen = "null";
                let html = this.updateWalletScreen();
                this.render(html, {height: 200});
            }
            else{
                this.subScreen = "send";
                let html = await this.#generateSendScreen();
                this.render(html.html, html.opts);
            }
        })
      }

    updateWalletScreen(){

      
        let walletContainer = document.createElement("div");
        
        console.log(this.userBalance)
  
  
        
        let AccountNameDiv = document.createElement("div");
        AccountNameDiv.style = "display:flex; flex-direction: column;";
        walletContainer.appendChild(AccountNameDiv);
  
        let AccountName = document.createElement("p");
        AccountName.innerHTML = `${this.wallet.accounts[0].name}   (${this.wallet.testnet?"testnet":"mainnet"})`;
        AccountName.style = "margin-left: 70px; margin-top: 10px; margin-bottom: 0px; font-size: 22px;";
        AccountNameDiv.appendChild(AccountName);
        if(this.userBalance && this.price){
          console.log("preloaded fine");
          let balanceUsd = document.createElement('p');
          balanceUsd.style = "margin-top: 0px; margin-bottom: 0px; margin-left: 70px; font-size: 10px;";
          let UsdTotal = "$" + (this.price*(this.userBalance/1000000)).toFixed(2);
          let AlgoTotal = " " + this.userBalance/1000000 + "Algo";
          balanceUsd.innerHTML = `${AlgoTotal}  ~  ${UsdTotal}`;
          AccountNameDiv.appendChild(balanceUsd);
          
        }
        else{
          console.log("failed to preload in time");
          this.preLoad().then((res)=>{
            console.log("late load");
            console.log(res);
            this.render(this.updateWalletScreen());
          });
        }
  
  
  
        let functionsDiv = document.createElement("div");
        functionsDiv.style = "display:flex;flex-direction:row; align-items:center; margin-top: 0px; margin-top: 8px; margin-left: 50px;";
        walletContainer.appendChild(functionsDiv);
  
        let sendButton = this.#createImgButton(sendImg);
        sendButton.id = "SnapAlgoWalletSendButton";

        let receiveButton = this.#createImgButton(qrImg);
        receiveButton.id = "SnapAlgoWalletreceiveButton";
  
        
        let transactionsButton = this.#createImgButton(logImg);
        transactionsButton.id = "SnapAlgoWalletTransactionsButton";

        functionsDiv.appendChild(transactionsButton);
        functionsDiv.appendChild(sendButton);
        functionsDiv.appendChild(receiveButton);
        
        
  
        console.log(this);
        let html = `
          <div>
            ${walletContainer.innerHTML}
          </div>
        `;
        return html;
  
      }
}
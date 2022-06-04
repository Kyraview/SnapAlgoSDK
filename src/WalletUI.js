import copyImg from './images/copy.png';
import sendImg from './images/send.png';
import qrImg from './images/qr.png';
import logImg from './images/log.png';
import pasteImg from './images/paste.png';
import viewImg from './images/view.png';
import QRCode from 'qrcode'



export default class WalletUI{

    constructor(wallet){
        this.wallet = wallet;
        this.price = null;
        this.userBalance = null;
        this.transactions = null;
        this.screen = "base";

    }

    preLoad(){
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
    
        Promise.all([price, balance]).then(
            this.renderScreen.bind(this)
        )
        .then(this.preLoadTransactions.bind(this))
        
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

    async #generateLedgerScreen(){
        if(this.transactions==null){
            console.log("transaction preload failed, retrying");
            return this.preLoadTransactions().then(this.#generateLedgerScreen.bind(this));
        }
        let holder = document.createElement("div");
        holder.style = "justify-content: center; display: flex; flex-direction: column; align-items: center;";
        let title = document.createElement('p');
        title.innerHTML = "Transactions";
        title.style = "font-size: 20px; margin-top: 20px; align-self: left;";
        holder.appendChild(title);
        let transactionContainer = document.createElement("div");
        transactionContainer.style = "overflow-y: auto; height: 300px; width: 95%; display: flex; flex-direction: column; align-items: center;";
        console.log(this.transactions);
        transactionContainer.className = "SnapAlgoLedgerContainer";
        holder.appendChild(transactionContainer);
        
        for(let transaction of this.transactions.transactions){
            console.log(transaction);
            let transactionDiv = document.createElement('div');
            
            transactionDiv.style = `
                display: flex; 
                flex-direction: row; 
                justify-content: space-between; 
                margin-top: 10px; 
                /*background-color: #444; */
                padding: 10px;
                width: 90%;
                /*box-shadow: 0px 1px 5px rgba(255,255,255,0.2);*/
                border-radius: 10px;
            `;
            
            let type = document.createElement('p');
            type.style = "font-size: 11px;";
            if(transaction['tx-type'] == "pay"){
                if(transaction.sender == this.wallet.accounts[0].addr){
                    type.innerHTML = `Sent ${transaction["payment-transaction"].amount/1000000} Algo to 
                    ${
                        transaction["payment-transaction"].receiver.substring(0,4) 
                        + "..." 
                        + transaction["payment-transaction"].receiver.substring(54)    
                    }`;
                }
                else{
                    type.innerHTML = `received ${transaction["payment-transaction"].amount/1000000} Algo from ${
                        transaction.sender.substring(0,4)
                        + "..."
                        + transaction.sender.substring(54)
                    }`;
                }
                
            }
            else{
                type.innerHTML = transaction['tx-type'];
                
            
                let sender = document.createElement('p');
                sender.style = "font-size: 11px; word-break: break-all;";
                sender.innerHTML = transaction.sender.substring(0,4)+"..."+transaction.sender.substring(54);


                transactionDiv.appendChild(sender);
            }
            let link = document.createElement('a');
            
            link.href = `https://${this.wallet.testnet ? "testnet." : ""}algoexplorer.io/tx/${transaction.id}`;
            link.target = "_blank";
            const viewIcon = document.createElement('img');
            viewIcon.src = viewImg;
            link.appendChild(viewIcon);
            transactionDiv.appendChild(type);
            transactionDiv.appendChild(link);
            transactionContainer.appendChild(transactionDiv);
        
        }

        let screen = this.getScreen();
        screen.height = 500;
        screen.element.appendChild(holder);
        this.wallet.render(screen);

    }

    async #generateSendScreen(silent){
        
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
          sendButton.id = "SnapAlgoWalletSendTransferButton";
          
          const sendFunction = () => {
                  console.log(this.wallet.testnet);
                  if(sendAddress.length > 0 && sendAmount > 0){
                      return window.ethereum.request({
                          method:  'wallet_invokeSnap',
                          params: ['npm:algorand', {
                              method:  'transfer',
                              testnet:  this.wallet.testnet,
                              to: sendAddress.value,
                              amount: amount.value
                          }]
                      });
                  }
                  else{
                      console.log("invalid input");
                  }
        };
        sendButton.addEventListener('click', sendFunction.bind(this));
        sendButtonDiv.appendChild(sendButton);
        let screen = this.getScreen();
        screen.element.appendChild(holder);
        screen.width = 650;
        screen.height = 400;
        if(silent){
            screen.silent = true;
        }
        this.wallet.render(screen);
        
          
      }
    

    async #generateReceiveScreen(silent){
          
            
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
          copyButton.addEventListener('click',
            ()=>{
                
                navigator.clipboard.writeText(this.wallet.accounts[0].addr);
            }
          );
          

          copyButton.style = "width: 100%;  border: white; cursor: pointer;";
          copyButton.innerHTML = "Copy Address";
          addressDiv.appendChild(address);
          addressDiv.appendChild(copyButton);
          recDiv.appendChild(addressDiv);
          let screen = this.getScreen();
          screen.element.appendChild(holder);
          screen.height = 350;
          screen.width = 400;
          if(silent){
              screen.silent = true;
          }
          this.wallet.render(screen);
          
    }

    toggleReceiveScreen(){
        if(this.screen == "receive"){
            this.screen = "base";
            this.wallet.render(this.getScreen());
        }else{
            this.screen = "receive";
            this.#generateReceiveScreen();
        }
    }

    toggleSendScreen(){
        if(this.screen == "send"){
            this.screen = "base";
            this.wallet.render(this.getScreen());
        }
        else{
            this.screen = "send";
            this.#generateSendScreen();
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
            this.#generateReceiveScreen({silent:true});
        }
        else if(this.screen == "send"){
            this.#generateSendScreen({silent:true});
        }
    } 

      
    getScreen(){
        console.log("screen Update");
        let walletContainer = document.createElement("div");
        
        let AccountNameDiv = document.createElement("div");
        AccountNameDiv.style = "display:flex; flex-direction: column;";
        walletContainer.appendChild(AccountNameDiv);

        let AccountName = document.createElement("p");
        AccountName.innerHTML = `${this.wallet.accounts[0].name}   (${this.wallet.testnet?"testnet":"mainnet"})`;
        AccountName.style = "margin-left: 70px; margin-top: 10px; margin-bottom: 0px; font-size: 22px;";
        AccountNameDiv.appendChild(AccountName);
        console.log(this.price)
        console.log(this.userBalance)
        if(this.price !== null && this.userBalance !== null){
            console.log("preloaded fine");
            let balanceUsd = document.createElement('p');
            balanceUsd.style = "margin-top: 0px; margin-bottom: 0px; margin-left: 70px; font-size: 10px;";
            let UsdTotal = "$" + (this.price*(this.userBalance/1000000)).toFixed(2);
            let AlgoTotal = " " + this.userBalance/1000000 + "Algo";
            console.log(UsdTotal);
            console.log(AlgoTotal);
            balanceUsd.innerHTML = `${AlgoTotal}  ~  ${UsdTotal}`;
            AccountNameDiv.appendChild(balanceUsd);
        }
      
        let functionsDiv = document.createElement("div");
        functionsDiv.style = "display:flex;flex-direction:row; align-items:center; margin-top: 0px; margin-top: 8px; margin-left: 50px;";
        walletContainer.appendChild(functionsDiv);

        let sendButton = this.#createImgButton(sendImg);
        sendButton.id = "SnapAlgoWalletSendButton";
        sendButton.addEventListener('click', this.toggleSendScreen.bind(this));

        let receiveButton = this.#createImgButton(qrImg);
        receiveButton.id = "SnapAlgoWalletreceiveButton";
        receiveButton.addEventListener('click',this.toggleReceiveScreen.bind(this));
        let transactionsButton = this.#createImgButton(logImg);
        transactionsButton.id = "SnapAlgoWalletTransactionsButton";
        transactionsButton.addEventListener("click", ()=>{ 
            this.#generateLedgerScreen()});
        functionsDiv.appendChild(transactionsButton);
        functionsDiv.appendChild(sendButton);
        functionsDiv.appendChild(receiveButton);
        return {"element":walletContainer, height:200, width:400};
  }
}
const IPFSURL = "https://snapalgo-imgs.netlify.app/imgs"
const viewImg = IPFSURL+'/search.svg';
export default class LedgerScreen{
    constructor(WalletUi, wallet){
        this.WalletUi = WalletUi;
        this.wallet = wallet;
    }
    async render(opts){
        if(this.WalletUi.transactions==null){
            console.log("transaction preload failed, retrying");
            return this.WalletUi.preLoadTransactions().then(this.render.bind(this));
        }
        let holder = document.createElement("div");
        this.wallet.injector.inject(holder, "justify-content: center; display: flex; flex-direction: column; align-items: center; height:70%;");
        let title = document.createElement('p');
        title.innerHTML = "Transaction History";
        title.className = "mainFont";
        this.wallet.injector.inject(title, "font-size: 20px; margin-top: 10px; margin-bottom: 10px; display: block; align-self: left;");
        holder.appendChild(title);
        let transactionContainer = document.createElement("div");
        transactionContainer.className = "SnapAlgoLedgerContainer";
        this.wallet.injector.inject(transactionContainer, "overflow-y: auto; height: 325px; margin-top: 10px; width: 95%; display: flex; flex-direction: column; align-items: center;");
        holder.appendChild(transactionContainer);
        
        for(let transaction of this.WalletUi.transactions.transactions){
            let transactionDiv = document.createElement('div');
            
            const transactionDiv_style = `
                display: flex; 
                flex-direction: row; 
                justify-content: space-between; 
                margin-top: 20px; 
                /*background-color: #444; */
                padding: 10px;
                width: 90%;
                /*box-shadow: 0px 1px 5px rgba(255,255,255,0.2);*/
                border-radius: 10px;
            `;
            this.wallet.injector.inject(transactionDiv, transactionDiv_style);
            
            let type = document.createElement('p');
            this.wallet.injector.inject(type, "font-size: 11px;");
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
                if(transaction['tx-type'] === 'axfer'){
                   type.innerHTML = "Asset Transfer"
                }
                else{
                    type.innerHTML = transaction['tx-type'];
                }
            
                let sender = document.createElement('p');
                this.wallet.injector.inject(sender, "font-size: 11px; word-break: break-all;");
                sender.innerHTML = transaction.sender.substring(0,4)+"..."+transaction.sender.substring(54);


                transactionDiv.appendChild(sender);
            }
            let link = document.createElement('a');
            this.wallet.injector.inject(link);
            link.href = `https://${this.wallet.testnet ? "testnet." : ""}algoexplorer.io/tx/${transaction.id}`;
            link.target = "_blank";
            const viewIcon = document.createElement('img');
            viewIcon.src = viewImg;
            this.wallet.injector.inject(viewIcon, "width: 20px; height: 20px;")
            link.appendChild(viewIcon);
            transactionDiv.appendChild(type);
            transactionDiv.appendChild(link);
            transactionContainer.appendChild(transactionDiv);
        
        }

        let screen = this.WalletUi.getScreen();
        screen.height = 500;
        screen.element.appendChild(holder);
        this.wallet.render(screen);

    }
}
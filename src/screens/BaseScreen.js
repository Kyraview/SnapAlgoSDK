const IPFSURL = 'https://snapalgo-imgs.netlify.app/imgs' 
const sendImg = IPFSURL+ "/send-outline.svg";
const qrImg = IPFSURL+ "/receive-outline.svg";
const logImg = IPFSURL+ "/ledger-outline.svg";
const AssetImg = IPFSURL+ "/wallet-outline.svg";
const AccountImg = IPFSURL+ "/account-outline.svg";
const SwapImg = IPFSURL+"/swap.svg"

export default class BaseScreen{
    constructor(walletUI, wallet){
        this.wallet = wallet;
        this.walletUI = walletUI;
    }
    #createImgButton(img, title){
        let iconHolder = document.createElement('div');
        this.wallet.injector.inject(iconHolder, "display: flex; flex-direction: column; justify-content: center; margin-left: 5px; margin-right: 5px;");
        let button = document.createElement('button');
        //button.style =  " color:white; width:35px; height:35px; border-radius: 100%;  border: white; cursor: pointer; margin: 5px;";
        button.className = "snapAlgoWalletButton";
        this.wallet.injector.inject(button, "border: none; background: none;  ");

        let buttonImg = document.createElement('img');
        buttonImg.src = img;
        this.wallet.injector.inject(buttonImg,"width: 40px; height: 40px; cursor: pointer; background: none; margin-right: 5px;");
        let text = document.createElement('p');
        text.innerHTML = title;
        text.dataset.title = title;
        text.dataset.opacity = '0';
        text.dataset.mouseOn = false;
        this.wallet.injector.inject(text, `color:white; font-size: 10pt; text-align: center; opacity: 0; animation-fill-mode: forwards;`)
        button.appendChild(buttonImg);
        iconHolder.appendChild(button);
        iconHolder.appendChild(text);
        buttonImg.addEventListener('mouseover', (e)=>{

            let title = e.target.parentElement.parentElement.lastChild
            console.log(title);
            title.style.animation = "fadeIn 1s forwards"
            
        })
        buttonImg.addEventListener('mouseout', (e)=>{
            
            
            let title = e.target.parentElement.parentElement.lastChild;
            title.style.animation = "";
            title.style.opacity = "0";
            
        })
        return iconHolder;
    }
    render(){
        let walletContainer = document.createElement("div");
        this.wallet.injector.inject(walletContainer);
        let networkDiv = document.createElement("div");
        networkDiv.className = "mainFont";
        this.wallet.injector.inject(networkDiv, `
        text-align: right; 
        height: 0px; 
        margin-top: 5px; 
        margin-right: 10px;
        display: flex; 
        flex-direction: row-reverse;
        
        `);
        
        networkDiv.innerHTML = `${this.wallet.testnet?"Testnet":"Mainnet"}`
        walletContainer.appendChild(networkDiv);

        let AccountNameDiv = document.createElement("div");
        this.wallet.injector.inject(AccountNameDiv, "display:flex; flex-direction: column; transform: translateY(-10px);")
        walletContainer.appendChild(AccountNameDiv);

        let AccountName = document.createElement("p");
        AccountName.innerHTML = `${this.wallet.accounts[0].name}`;
        AccountName.className = "mainFont";
        this.wallet.injector.inject(
            AccountName, 
            `
            margin-left: 70px; 
            margin-top: 10px; 
            margin-bottom: 0px; 
            font-size: 30px;
            `
        );
        
        AccountNameDiv.appendChild(AccountName);

        if(this.price !== null && this.userBalance !== null){
            let balanceUsd = document.createElement('p');
            
            balanceUsd.className = "secoundaryFont";
            this.wallet.injector.inject(balanceUsd, "margin-top: 0px; margin-bottom: 0px; margin-left: 70px; font-size: 15px;");
            let UsdTotal = "$" + (this.walletUI.price*(this.walletUI.userBalance/1000000)).toFixed(2);
            let AlgoTotal = " " + (this.walletUI.userBalance/1000000).toFixed(3) + " Algo";
            balanceUsd.innerHTML = `${AlgoTotal}   ${this.walletUI.price === 0? "": "~ "+UsdTotal}`;
            AccountNameDiv.appendChild(balanceUsd);
        }
      
        let functionsDiv = document.createElement("div");
        this.wallet.injector.inject(functionsDiv,
            "display:flex; flex-direction:row; align-items:center; margin-top: 3px; margin-left: 50px;"
        );
        walletContainer.appendChild(functionsDiv);

        let sendButton = this.#createImgButton(sendImg, "send");
        
        sendButton.id = "SnapAlgoWalletSendButton";
        sendButton.addEventListener('click', this.walletUI.toggleSendScreen.bind(this.walletUI));

        let receiveButton = this.#createImgButton(qrImg, "receive");
        receiveButton.id = "SnapAlgoWalletreceiveButton";
        
        receiveButton.addEventListener('click',this.walletUI.toggleReceiveScreen.bind(this.walletUI));
        let transactionsButton = this.#createImgButton(logImg,  "history");
        transactionsButton.id = "SnapAlgoWalletTransactionsButton";
        
        transactionsButton.addEventListener("click", this.walletUI.toggleLedgerScreen.bind(this.walletUI));
        
        let swapButton = this.#createImgButton(SwapImg, "swap");
        swapButton.id = "SnapAlgoWalletExchangeButton";
       
        swapButton.addEventListener('click', this.walletUI.toggleExchangeScreen.bind(this.walletUI))

        let assetButton = this.#createImgButton(AssetImg, "assets");
        assetButton.id = "SnapAlgoWalletAssetButton";
        
        assetButton.addEventListener("click", this.walletUI.toggleAssetScreen.bind(this.walletUI));

        let accountButton = this.#createImgButton(AccountImg, "user");
        
        accountButton.addEventListener('click', this.walletUI.toggleAccountScreen.bind(this.walletUI));

        functionsDiv.appendChild(assetButton);
        functionsDiv.appendChild(sendButton);
        functionsDiv.appendChild(receiveButton);
        functionsDiv.appendChild(swapButton);
        functionsDiv.appendChild(transactionsButton);
        functionsDiv.appendChild(accountButton);
        
        return {"element":walletContainer, height:175, width:400};
  }
}
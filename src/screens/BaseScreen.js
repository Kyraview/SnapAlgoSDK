const IPFSURL = 'https://snapalgo-imgs.netlify.app/imgs' 
const sendImg = IPFSURL+ "/send-outline.svg";
const qrImg = IPFSURL+ "/receive-outline.svg";
const logImg = IPFSURL+ "/ledger-outline.svg";
const AssetImg = IPFSURL+ "/wallet-outline.svg";
const AccountImg = IPFSURL+ "/account-outline.svg";

export default class BaseScreen{
    constructor(walletUI, wallet){
        this.wallet = wallet;
        this.walletUI = walletUI;
    }
    #createImgButton(img){
        let button = document.createElement('button');
        //button.style =  " color:white; width:35px; height:35px; border-radius: 100%;  border: white; cursor: pointer; margin: 5px;";
        button.style = "border: none; background: none;"

        let buttonImg = document.createElement('img');
        buttonImg.src = img;
        buttonImg.style = "width: 40px; height: 40px; margin: auto; cursor: pointer;";
        button.className = "snapAlgoWalletButton";
        button.appendChild(buttonImg);
        return button;
    }
    render(){
        console.log("screen Update");
        let walletContainer = document.createElement("div");
        let networkDiv = document.createElement("div");
        networkDiv.style = `
        text-align: right; 
        height: 0px; 
        padding-top: 5px; 
        padding-right: 5px;
        background-color: 
        `;
        networkDiv.className = "mainFont";
        networkDiv.innerHTML = `${this.wallet.testnet?"Testnet":"Mainnet"}`
        walletContainer.appendChild(networkDiv);

        let AccountNameDiv = document.createElement("div");
        AccountNameDiv.style = "display:flex; flex-direction: column;";
        walletContainer.appendChild(AccountNameDiv);

        let AccountName = document.createElement("p");
        AccountName.innerHTML = `${this.wallet.accounts[0].name}`;
        AccountName.style = `
        margin-left: 70px; 
        margin-top: 10px; 
        margin-bottom: 0px; 
        font-size: 30px;`;
        AccountName.className = "mainFont";
        AccountNameDiv.appendChild(AccountName);

        console.log(this.walletUI.price)
        console.log(this.walletUI.userBalance)
        if(this.price !== null && this.userBalance !== null){
            console.log("preloaded fine");
            let balanceUsd = document.createElement('p');
            balanceUsd.style = "margin-top: 0px; margin-bottom: 0px; margin-left: 70px; font-size: 15px;";
            balanceUsd.className = "secoundaryFont";
            let UsdTotal = "$" + (this.walletUI.price*(this.walletUI.userBalance/1000000)).toFixed(2);
            let AlgoTotal = " " + (this.walletUI.userBalance/1000000).toFixed(3) + " Algo";
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
        sendButton.addEventListener('click', this.walletUI.toggleSendScreen.bind(this.walletUI));

        let receiveButton = this.#createImgButton(qrImg);
        receiveButton.id = "SnapAlgoWalletreceiveButton";
        receiveButton.addEventListener('click',this.walletUI.toggleReceiveScreen.bind(this.walletUI));
        let transactionsButton = this.#createImgButton(logImg);
        transactionsButton.id = "SnapAlgoWalletTransactionsButton";
        transactionsButton.addEventListener("click", this.walletUI.toggleLedgerScreen.bind(this.walletUI));
        let assetButton = this.#createImgButton(AssetImg);
        assetButton.id = "SnapAlgoWalletAssetButton";
        assetButton.addEventListener("click", this.walletUI.toggleAssetScreen.bind(this.walletUI));

        let accountButton = this.#createImgButton(AccountImg);
        accountButton.addEventListener('click', this.walletUI.toggleAccountScreen.bind(this.walletUI));

        functionsDiv.appendChild(assetButton);
        functionsDiv.appendChild(sendButton);
        functionsDiv.appendChild(receiveButton);
        functionsDiv.appendChild(transactionsButton);
        functionsDiv.appendChild(accountButton);
        
        return {"element":walletContainer, height:175, width:400};
  }
}
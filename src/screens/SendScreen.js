
const pasteImg = "https://snapalgo-imgs.netlify.app/imgs/paste-outline.svg"
export default class SendScreen{
    constructor(walletUi, wallet){
        this.walletUi = walletUi;
        this.wallet = wallet;
        this.asset = "algo";
        this.assetSelectIndex = 0;
    }

    async updateAndRender(){
        await this.walletUi.preLoad();
        this.render();
    }

    async render(opts){
        if(opts === undefined){
            opts = {};
        }
        let holder = document.createElement("div");
        this.wallet.injector.inject(holder, "display:block; margin-top: 20px;");
        let container = document.createElement('div');
        this.wallet.injector.inject(container, "margin-left: 25px; margin-right: 25px;")
        holder.appendChild(container);

        let sendDiv = document.createElement('div');
        this.wallet.injector.inject(sendDiv, "display:flex; margin-left: 25px; margin-right: 25px;");
        holder.appendChild(document.createElement('br'));
        let sendAddresLabel = document.createElement('p');
        this.wallet.injector.inject(sendAddresLabel);
        sendAddresLabel.innerHTML = "recipient address";
        container.appendChild(sendAddresLabel);
        container.appendChild(sendDiv);


        let sendAddress = document.createElement('input');
        sendAddress.maxLength="58";
        this.wallet.injector.inject(sendAddress, "width: 580px; height: 20px; border-radius: 5px; font-family: monospace; text-align:left; margin-top: 4px;")
        sendAddress.id = "SnapAlgoWalletSendAddress";
        sendDiv.appendChild(sendAddress);
        let pasteButton = document.createElement('img');
        this.wallet.injector.inject(pasteButton, "display: block;");
        pasteButton.src = pasteImg;
        pasteButton.id = "SnapAlgoWalletSendPasteButton";
        pasteButton.className = "snapAlgoHoverEffect";
        this.wallet.injector.inject(pasteButton, "width: 30px; cursor: pointer; padding:3px;")
        sendDiv.appendChild(pasteButton);
        let sendAmountLabel = document.createElement('p');
        this.wallet.injector.inject(sendAmountLabel, "margin-left: 25px; margin-top: 20px; display: block;");
        sendAmountLabel.innerHTML = "amount";
        container.appendChild(sendAmountLabel);

        let amountDiv = document.createElement('div');
        this.wallet.injector.inject(amountDiv, "display:flex; justify-content:start; margin-left: 25px; margin-right: 25px;");
        this.coinDropDown = document.createElement('select');
        this.wallet.injector.inject(this.coinDropDown, "text-align: center; margin-right:10px;");
        this.coinDropDown.value = "algo";
        function setAsset(e){
            const index = e.target.selectedIndex;
            this.asset = e.target.value;
        }
        this.coinDropDown.addEventListener('change', setAsset.bind(this));
        let options = []
        
        
        for(let asset of this.walletUi.assets){
            let data = asset.asset[0].params
            const assetId = asset['asset-id']
            let option = document.createElement("option");
            this.wallet.injector.inject(option);
            option.value = assetId;
            option.innerHTML = data['unit-name'];
            option.dataset.decimals = data.decimals;
            option.id = "snapAlgoSendCoinOption"+assetId;
            this.coinDropDown.appendChild(option);
            options.push(option);
        }
        


        let amount = document.createElement('input');

        amount.type = "number";
        amount.min = "0";
        amount.step = "0.1";
        this.wallet.injector.inject(amount, "text-align: left; width: 488px; height: 20px; margin-top: 2px; border-radius: 5px; font-family: monospace; font-size: 20px;");
        amount.id = "SnapAlgoWalletSendAmount";

        amountDiv.appendChild(this.coinDropDown);
        amountDiv.appendChild(amount);
        
        
        container.appendChild(amountDiv);
        container.appendChild(document.createElement('br'));
        container.appendChild(document.createElement('br'));
        const sendButtonDiv = document.createElement('div');
        this.wallet.injector.inject(sendButtonDiv, "display:flex; justify-content: center;");
        container.appendChild(sendButtonDiv);
        let sendButton = document.createElement('button');
        sendButton.innerHTML = "send";
        sendButton.className = "snapAlgoDefaultButton-alt";
        this.wallet.injector.inject(sendButton, "font-size: 15px; height: 35px;");

        
        const sendFunction = () => {
                
                let assetId = this.asset;
                
                if(sendAddress.length < 0 || Number(amount.value) < 0){
                    console.log("invalid input");
                    return false;
                }
                if(assetId === "algo"){
                    return window.ethereum.request({
                        method:  'wallet_invokeSnap',
                        params: ['npm:algorand', {
                            method:  'transfer',
                            testnet:  this.wallet.testnet,
                            to: sendAddress.value,
                            amount: Number(amount.value)*1000000
                        }]
                    }).then(this.updateAndRender.bind(this));
                }
                else{
                    window.ethereum.request({
                        method:  'wallet_invokeSnap',
                        params: ['npm:algorand', {
                            
                            method:  'transferAsset',
                            assetIndex: Number(assetId),
                            to: sendAddress.value,
                            amount: Number(amount.value)*(10**Number(document.getElementById("snapAlgoSendCoinOption"+assetId).dataset.decimals))
                        }]
                    })
                }
      };
      sendButton.addEventListener('click', sendFunction.bind(this));
      sendButtonDiv.appendChild(sendButton);
      let screen = this.walletUi.getScreen();
      screen.element.appendChild(holder);
      screen.width = 650;
      screen.height = 400;
      if(opts.hasOwnProperty("silent")){
        if(opts.silent){
          screen.silent = true;
        }
      }
      this.wallet.render(screen);
    }
}
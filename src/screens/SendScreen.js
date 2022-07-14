import pasteImg from '../images/paste.png';
export default class SendScreen{
    constructor(walletUi, wallet){
        this.walletUi = walletUi;
        this.wallet = wallet;
        this.asset = "algo";
        this.assetSelectIndex = 0;
        console.log(this.walletUi)
        console.log(this.wallet)
    }

    #createButton(text){
        let button = document.createElement('button');
        button.innerHTML = text;
        button.style =  "background-color:white; color:black; width:80px; height:30px; border-radius: 20px;  border: white; cursor: pointer;"; 
        button.className = "snapAlgoWalletButton";
        return button;
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

        let amountDiv = document.createElement('div');
        amountDiv.style = "display:flex; justify-content: left;";

        this.coinDropDown = document.createElement('select');
        this.coinDropDown.value = "algo";
        function setAsset(e){
            console.log(e);
            console.log(e.target);
            console.log(e.target.value);
            const index = e.target.selectedIndex;
            this.asset = e.target.value;
        }
        this.coinDropDown.addEventListener('change', setAsset.bind(this));
        let options = []
        let options1 = document.createElement('option');
        options1.value = "algo";
        options1.innerHTML = "Algo";
        options1.dataset.decimals = "6";
        options1.dataset.isAlgo = "true";
        this.coinDropDown.appendChild(options1);
        options.push(options1);
        for(let asset of this.walletUi.assets){
            let data = asset.asset[0].params
            const assetId = asset['asset-id']
            console.log(data)
            let option = document.createElement("option");
            option.value = assetId;
            option.innerHTML = data['unit-name'];
            option.dataset.decimals = data.decimals;
            option.dataset.isAlgo = "false";
            option.id = "snapAlgoSendCoinOption"+assetId;
            this.coinDropDown.appendChild(option);
            options.push(option);
        }
        


        let amount = document.createElement('input');
        amount.type = "number";
        amount.style = "width: 100%; text-align: center; border-radius: 5px; font-family: monospace; font-size: 20px;";
        amount.id = "SnapAlgoWalletSendAmount";

        amountDiv.appendChild(this.coinDropDown);
        amountDiv.appendChild(amount);
        
        
        container.appendChild(amountDiv);
        container.appendChild(document.createElement('br'));
        container.appendChild(document.createElement('br'));
        const sendButtonDiv = document.createElement('div');
        sendButtonDiv.style = "display:flex; justify-content: center;";
        container.appendChild(sendButtonDiv);
        let sendButton = document.createElement('button');
        sendButton.innerHTML = "send";
        sendButton.style = "font-size: 15px;"
        sendButton.className = "snapAlgoDefaultButton alt";

        
        const sendFunction = () => {
                console.log(this.wallet.testnet);
                console.log(this.coinDropDown);
                
                let assetId = this.asset;
                console.log(assetId)
                console.log(this.asset)
                
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
                    console.log(assetId);
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
      console.log("here in send render");
      console.log(this.walletUi);
      console.log("that was it");
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
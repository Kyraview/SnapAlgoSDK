import searchImg from '../images/search.png';
import coinsImg from '../images/coins.png';
import coinImg from '../images/coin.png';
import backImg from '../images/back.png';
import sendAltImg from '../images/send2.png';
import receiveImg from '../images/qr1.png';
import QRCode from 'qrcode';

export default class AssetScreen{
    constructor(walletUI, wallet){
        this.walletUI = walletUI;
        this.wallet = wallet;
        this.searchOpen = false;
        this.importOpen = false;
        this.assetsOpen = true;
        this.viewOpen = false;
        this.topDivOpen = true;
        this.viewAsset = null;
        this.loading = false;
        this.subScreen = "none";
        this.currentSearch = [];
    }
    #createImgButton(img){
        let button = document.createElement('button');
        button.style =  `
        color:white; width:30px; height:30px; 
        min-width: 30px; min-height:30px; 
        border-radius: 100%;  border: white; cursor: pointer; margin: auto 0 auto 0;`;
        let buttonImg = document.createElement('img');
        buttonImg.src = img;
        buttonImg.style = `width: 15px; height: 15px; min-width: 15px; min-height: 15px;`;
        button.className = "snapAlgoWalletButton";
        button.appendChild(buttonImg);
        return button;
    }
    async searchFor(search){
        const url = "https://free-api.vestige.fi/assets/search?query=" + search;
        let results = await fetch(url)
        this.currentSearch = await results.json();
        console.log(this.currentSearch);
        return this.currentSearch;

    }
    renderSearchTerms(searchTerms){
        searchTerms.innerHTML = "";
        
        for(let searchTerm of this.currentSearch){
            let optIn_optOut = "optIn";
            for(let asset of this.walletUI.assets){
                if(asset['asset-id'] === Number(searchTerm['id'])){
                    optIn_optOut = "optOut";
                }
            }
            let searchResult = document.createElement("div");
            searchResult.style = "display: flex;  justify-content: space-between;";
            let termTitle = document.createElement("p");
            termTitle.innerHTML = searchTerm.ticker.toUpperCase();
            termTitle.style = "font-size: 15px;";
            searchResult.coinId = searchTerm.id;
            searchResult.appendChild(termTitle);
            let optInButton = document.createElement("button");
            if(optIn_optOut === "optIn"){
                optInButton.innerHTML = "Opt In";
                console.log("testnet is: ");
                console.log(this.walletUI.wallet.testnet)
                optInButton.addEventListener("click", async (e)=>{
                    console.log("opt in");
                    console.log("testnet is: ");
                    console.log(this.walletUI.wallet.testnet);
                    ethereum.request({
                        method: 'wallet_invokeSnap',
                        params: ['npm:algorand', {
                          method: 'AssetOptIn',
                          assetIndex: Number(searchTerm.id),
                          testnet : this.walletUI.wallet.testnet
                        }]        
                      }).then(
                        async ()=>{
                            console.log(this.walletUI);
                            console.log(this);
                            await this.walletUI.preLoadAssets();
                            this.render();
                        }
                      );
                });
            }
            else{
                optInButton.innerHTML = "Opt Out";
                optInButton.addEventListener("click", async (e)=>{  
                    console.log(this.walletUI.wallet.testnet);
                    ethereum.request({
                        method: 'wallet_invokeSnap',
                        params: ['npm:algorand', {
                            method: 'AssetOptOut',
                            assetIndex: Number(searchTerm.id),
                            testnet: this.walletUI.wallet.testnet
                        }]
                    }).then(
                        async ()=>{
                            console.log(this.walletUI);
                            console.log(this);
                            await this.walletUI.preLoadAssets();
                            this.render();
                        }
                    );
                });
            }
            
            optInButton.style = "height: 35px; width: 60px; border-radius: 5px; font-size: 10px; margin: auto 5px auto 0px;";

            searchResult.appendChild(optInButton);
            searchTerms.appendChild(searchResult);
        }
    }
    async getSearchScreen(){
        let holder = document.createElement("div");
        let searchHolder = document.createElement("form");

        searchHolder.style = "display:block;";
        holder.appendChild(searchHolder);
        let search = document.createElement("input");
        search.style = "margin-left: 30px"
        search.placeholder = "asset Id or name";
        searchHolder.appendChild(search);
        search.addEventListener("keyup", async (e)=>{
            let possibleIdNumber = Number(e.target.value);
            if(Number.isInteger(possibleIdNumber) && possibleIdNumber > 0){
                //done
            }
            this.currentSearch = await this.searchFor(e.target.value);
            this.renderSearchTerms(searchTerms);
        });
        if(this.importOpen){
            let loader = document.createElement("div");
            loader.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;

        }

        let optInDiv = document.createElement("div");
        optInDiv.style = "display: flex; flex-direction: column; margin-top: 20px;";
        holder.appendChild(optInDiv);

        

        let searchTerms = document.createElement("div");
        searchTerms.style = "display: flex; flex-direction: column; overflow: auto; height: 150px; margin-left: 30px; margin-right: 30px;";
        searchTerms.className = "SnapAlgoLedgerContainer"
        optInDiv.appendChild(searchTerms);
        return holder;
    }

    async getAssetList(){
        let holder = document.createElement("div");
        holder.style = `
        display: flex; 
        flex-wrap: wrap; 
        justify-content: 
        space-between; 
        margin-left: 30px; 
        margin-right: 30px; 
        height: 110px; 
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 5px;
        `;
        holder.className = "SnapAlgoLedgerContainer";
        let userAssets = this.walletUI.assets;
        console.log("userAssets is: ", userAssets);
        console.log(userAssets);
        if(!userAssets){
            userAssets = await this.walletUI.preLoadAssets();
        }
        
        for(let Asset of userAssets){
            
            console.log("here")
            console.log(Asset);
            let assetDiv = document.createElement("div");
            assetDiv.style = `
            
            margin-left: 2.5px; 
            margin-right: 2.5px; 
            display: flex; 
            width: 100px; 
            height: 40px;
            cursor: pointer;
            `;
            assetDiv.className = "snapAlgoHoverEffect";
            let icon = document.createElement("img");
            icon.addEventListener('error', (e)=>{
                e.target.src = coinImg;
            })
            icon.src = "https://asa-list.tinyman.org/assets/"+Asset['asset-id']+"/icon.png";
            icon.style = "width: 30px; height: 30px; min-width: 30px; min-height: 30px;";
            assetDiv.appendChild(icon);
            let info = document.createElement("div");
            //asset amount
            let assetAmount = document.createElement("p");
            assetAmount.style = "color: white; font-size: 10px; margin-left: 5px; margin-top: 0px; margin-bottom: 0px;";
            assetAmount.innerHTML = `${Number(Asset.amount)/(10**Asset.asset[0].params.decimals)}`;
            //asset name
            let assetName = document.createElement("p");
            assetName.style = "color: white; font-size: 10px; margin-left: 5px; margin-top: 7px; margin-bottom: 0px;";
            assetName.innerHTML = Asset.asset[0].params['unit-name'].toUpperCase();

            info.appendChild(assetName);
            info.appendChild(assetAmount);
            assetDiv.appendChild(info);

            assetDiv.addEventListener('click', ()=>{
                this.openViewAssetScreen(Asset)
            })

            holder.appendChild(assetDiv);
        }
        //create Ghosts divs to keep flexbox left aligned
        for(let i = 0; i<3-(userAssets.length%3); i++){
            let ghostDiv = document.createElement("div");
            ghostDiv.style = `
            width: 100px;
            height: 40px;
            `;
            holder.appendChild(ghostDiv);
        }
        return holder;

    }
    async openViewAssetScreen(asset){
        this.viewAsset = asset;
        this.viewOpen = true;
        this.assetsOpen = false;
        this.searchOpen = false;
        this.topDivOpen = false;
        this.render();
    }
    async exitViewAssetScreen(){
        this.viewOpen = false;
        this.assetsOpen = true;
        this.searchOpen = false;
        this.topDivOpen = true;
        this.render();
    }

    toggleReceive(){
        if(this.subScreen === "receive"){
            this.subScreen = "none"
        }
        else{
            this.subScreen = "receive"
        }
        this.render();
    }
    toggleSend(){
        if(this.subScreen === "send"){
            this.subScreen = "none"
        }
        else{
            this.subScreen = "send"
        }
        this.render();
    }

    async getAssetScreen(asset){
        let holder = document.createElement('div');
        holder.style = `
        margin-left: 30px;
        margin-right: 30px;
        `;
        
        let titleDiv = document.createElement('div');
        titleDiv.style = "display: flex;";
        holder.appendChild(titleDiv)

        let backButton = document.createElement('img');
        backButton.style = `
        position: absolute;
        width: 35px;
        height: 35px;
        border-radius: 100%;
        left: 32px;
        top: 127px;
        cursor: pointer;
        `
        backButton.src = backImg;
        backButton.className = "snapAlgoDefaultButton alt";
        backButton.addEventListener('click', ()=>{
            this.exitViewAssetScreen();
        });
        titleDiv.appendChild(backButton);

        let icon = document.createElement('img');
        icon.style = "height: 100px; width: 100px";
        icon.src = "https://asa-list.tinyman.org/assets/"+asset['asset-id']+"/icon.png";
        icon.addEventListener('error', (e)=>{
            e.target.src = coinImg;
        })
        titleDiv.appendChild(icon);
        
        let titleHolder = document.createElement("div");
        titleHolder.style = "display: flex; flex-direction: column;  margin-top: 10px; margin-left: 20px;"
        let title = document.createElement('p');
        title.style = "font-size: 20px; margin:0px;"
        title.innerHTML = asset.asset[0].params['name']
        titleHolder.appendChild(title);
        let amount = document.createElement('p');
        amount.innerHTML = `${Number(asset.amount)/(10**asset.asset[0].params.decimals)} ${asset.asset[0].params['unit-name'].toUpperCase()}`;
        amount.style = "margin: 0;";
        titleHolder.appendChild(amount);
        titleDiv.appendChild(titleHolder);

        let actionHolder = document.createElement("div");
        actionHolder.style = "display: flex;";
        
        let receiveButton = document.createElement('img');
        receiveButton.src = receiveImg;
        receiveButton.style = "width: 35px; height: 35px;";
        receiveButton.className = "snapAlgoHoverEffect";
        receiveButton.addEventListener('click', this.toggleReceive.bind(this));
        actionHolder.appendChild(receiveButton);
        

        let sendButton = document.createElement('img');
        sendButton.src = sendAltImg;
        sendButton.style="width: 35px; height: 35px;";
        sendButton.className = "snapAlgoHoverEffect";
        sendButton.addEventListener('click', this.toggleSend.bind(this));

        actionHolder.appendChild(sendButton);

        titleHolder.appendChild(actionHolder);

        if(this.subScreen === "receive"){
            let receiveDiv = document.createElement("div");
            receiveDiv.style = "display: flex; justify-content:center; margin-top: 20px;";
            const address = this.wallet.accounts[0].addr
            let addressQR = (await QRCode.toDataURL(address));
            let qrCodeImage = document.createElement('img');
            qrCodeImage.src = addressQR;
            qrCodeImage.style = "width: 100px; height: 100px; margin-left: 10px;";
            receiveDiv.appendChild(qrCodeImage);
            let addressText = document.createElement('p');
            addressText.style = "color:white; font-size: 10px; width: 75px; margin-left:10px; word-break: break-all;";
            addressText.innerHTML = address;
            receiveDiv.appendChild(addressText)
            holder.appendChild(receiveDiv);
        }
        console.log("internal Asset is: ");
        console.log(asset);
        if(this.subScreen === "send"){
            
            let sendDiv = document.createElement("div");
            sendDiv.style = "display: flex; flex-direction: column; justify-content:center; margin-top: 20px;";
            let addressInput = document.createElement('input');
            addressInput.style = "width: 90%; height: 30px; font-size: 9px; margin: auto;";
            addressInput.placeholder = "Address";
            sendDiv.appendChild(addressInput);
            let amountInput = document.createElement('input');
            amountInput.style = "width: 90%; height: 30px; margin-left: 10px; margin: auto;";
            amountInput.type = "number";
            amountInput.placeholder = "Amount";
            sendDiv.appendChild(amountInput);

            let sendButton = document.createElement('button');
            sendButton.style = "width: 100px; height: 30px; margin: auto; margin-top: 10px;";
            sendButton.className = "snapAlgoDefaultButton alt";
            sendButton.innerHTML = "Send";
            sendDiv.appendChild(sendButton);
            sendButton.addEventListener('click', ()=>{
                console.log("amount", amountInput.value);
                console.log("address", addressInput.value);
                console.log(asset);
                const decimals = asset.asset[0].params.decimals;
                return window.ethereum.request({
                    method:  'wallet_invokeSnap',
                    params: ['npm:algorand', {
                        
                        method:  'transferAsset',
                        assetIndex: Number(asset['asset-id']),
                        to: addressInput.value,
                        amount: Number(amountInput.value)*(10**Number(decimals)),
                    }]
                })
            });
            holder.appendChild(sendDiv);
        }

        return holder;
    }

    getTopDiv(){
        let topDiv = document.createElement("div");
        topDiv.style = "display: flex; margin-left: 37px; margin-right: 30px;";
        let searchButton = this.#createImgButton(searchImg);
        searchButton.addEventListener("click", (e)=>{
            this.searchOpen = !this.searchOpen;
            if(this.searchOpen){
                this.assetsOpen = false;
            }
            else{
                this.assetsOpen = true;
            }
            this.render();
        });
        
        topDiv.appendChild(searchButton);
        let title = document.createElement('p');
        title.innerHTML = "Assets";
        title.style = "font-size: 20px; margin-left: 10px;";
        topDiv.appendChild(title);

        return topDiv
    }

    async render(opts){
        if(opts === undefined){
            opts = {};
        }
        let holder = document.createElement("div");
        holder.style = "margin-top: 10px;";
        let viewHeight = 300;

        if(this.topDivOpen){
            let topDiv = this.getTopDiv();
            holder.appendChild(topDiv);
        }

        if(this.searchOpen){
            let searchScreen = await this.getSearchScreen();
            console.log("searchScreen is: ", searchScreen);
            console.log(searchScreen);
            holder.appendChild(searchScreen);
            viewHeight = 475;
        }
        if(this.assetsOpen){
            let assetList = await this.getAssetList();
            holder.appendChild(assetList);
            viewHeight = 400;
        }
        if(this.viewOpen){
            let assetView = await this.getAssetScreen(this.viewAsset);
            holder.appendChild(assetView);
            viewHeight = 250;
            viewHeight = 275;
            if(this.subScreen === "receive"){
                viewHeight = 400;
            }
            if(this.subScreen === "send"){
                viewHeight = 450;
            }
        }


        
        let screen = this.walletUI.getScreen();
        screen.element.appendChild(holder);
        screen.height = viewHeight;
        screen.width = 400;
        
        if(opts.hasOwnProperty("silent")){
            if(opts.silent){
              screen.silent = true;
            }
          }
        this.wallet.render(screen);
        
    }
        
}
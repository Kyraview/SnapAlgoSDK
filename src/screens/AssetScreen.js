const IPFSURL = 'https://snapalgo-imgs.netlify.app/imgs';


const searchImg = IPFSURL+'/search.svg';
const coinImg = 'https://img.icons8.com/ios-filled/344/cheap-2.png';
const backImg = IPFSURL+'/back-button.svg';
const sendAltImg = IPFSURL+'/send-outline.svg';
const receiveImg = IPFSURL+'/receive-outline.svg';

const QRCode = require('qrcode');


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
        button.className = "snapAlgoDefaultButton-alt";
        const button_style =  `
        color:white; width:30px; height:30px; 
        min-width: 30px; min-height:30px; 
        border-radius: 100%;  border: black; cursor: pointer; margin: auto 0 auto 0;`;
        this.wallet.injector.inject(button, button_style);

        let buttonImg = document.createElement('img');
        buttonImg.src = img;
        const buttonImg_style = `width: 15px; height: 15px; min-width: 15px; min-height: 15px; background-color: #0000;`;
        this.wallet.injector.inject(buttonImg, buttonImg_style);
        button.appendChild(buttonImg);
        return button;
    }
    async searchFor(search){
        const url = "https://free-api.vestige.fi/assets/search?query=" + search;
        let results = await fetch(url)
        this.currentSearch = await results.json();
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
            this.wallet.injector.inject(searchResult, "display: flex;  justify-content: space-between;")
            let termTitle = document.createElement("p");
            termTitle.innerHTML = searchTerm.ticker.toUpperCase();
            this.wallet.injector.inject(termTitle, "font-size: 15px;")
            searchResult.coinId = searchTerm.id;
            searchResult.appendChild(termTitle);
            let optInButton = document.createElement("button");
            

            if(optIn_optOut === "optIn"){
                optInButton.innerHTML = "Opt In";
                optInButton.addEventListener("click", async (e)=>{
                    ethereum.request({
                        method: 'wallet_invokeSnap',
                        params: ['npm:algorand', {
                          method: 'assetOptIn',
                          params:{
                            assetIndex: Number(searchTerm.id),
                            testnet : this.walletUI.wallet.testnet
                          }
                        }]        
                      }).then(
                        async ()=>{
                            await this.walletUI.preLoadAssets();
                            this.render();
                        }
                      );
                });
            }
            else{
                optInButton.innerHTML = "Opt Out";
                optInButton.addEventListener("click", async (e)=>{  
                    ethereum.request({
                        method: 'wallet_invokeSnap',
                        params: ['npm:algorand', {
                            method: 'assetOptOut',
                            params:{
                                assetIndex: Number(searchTerm.id),
                                testnet: this.walletUI.wallet.testnet
                            }
                        }]
                    }).then(
                        async ()=>{
                            await this.walletUI.preLoadAssets();
                            this.render();
                        }
                    );
                });
            }
            optInButton.className = "snapAlgoDefaultButton-alt";
            this.wallet.injector.inject(optInButton, "height: 35px; width: 60px; border-radius: 5px; font-size: 10px; margin: auto 5px auto 0px;");

            
            searchResult.appendChild(optInButton);
            searchTerms.appendChild(searchResult);
        }
    }
    async getSearchScreen(){
        let holder = document.createElement("div");
        this.wallet.injector.inject(holder);
        let searchHolder = document.createElement("form");
        this.wallet.injector.inject(searchHolder, "display:block;")
        holder.appendChild(searchHolder);
        let search = document.createElement("input");
        this.wallet.injector.inject(search, "margin-left: 30px")
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
        this.wallet.injector.inject(optInDiv, "display: flex; flex-direction: column; margin-top: 20px;");
        holder.appendChild(optInDiv);

        

        let searchTerms = document.createElement("div");
        this.wallet.injector.inject(
            searchTerms, 
            "display: flex; flex-direction: column; overflow: auto; height: 150px; margin-left: 30px; margin-right: 30px;"
        )
        searchTerms.className = "SnapAlgoLedgerContainer"
        optInDiv.appendChild(searchTerms);
        return holder;
    }

    

    async getAssetList(){
        let holder = document.createElement("div");
        holder.className = "SnapAlgoLedgerContainer";
        this.wallet.injector.inject(holder, `
        display: flex; 
        flex-wrap: wrap; 
        justify-content: 
        space-between; 
        margin-left: 30px; 
        margin-right: 30px;
        margin-top: 20px; 
        height: 110px; 
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 5px;
        `)
        
        let userAssets = this.walletUI.assets;
        if(!userAssets){
            userAssets = await this.walletUI.preLoadAssets();
        }
        
        for(let Asset of userAssets){
            let assetDiv = document.createElement("div");
            assetDiv.className = "snapAlgoHoverEffect";
            this.wallet.injector.inject(assetDiv,`    
            margin-left: 2.5px; 
            margin-right: 2.5px; 
            display: flex; 
            width: 100px; 
            height: 40px;
            cursor: pointer;
            `);
            
            let icon = document.createElement("img");
            icon.addEventListener('error', (e)=>{
                e.target.src = coinImg;
            })
            if(Asset['asset-id'] === 0){
                icon.src = "https://res.cloudinary.com/startup-grind/image/upload/c_fill,f_auto,g_center,q_auto:good/v1/gcs/platform-data-algorand/contentbuilder/C_Algorand-Event-Thumbnail-400x400_EjNd7dj.png";
            }
            else{
                icon.src = "https://asa-list.tinyman.org/assets/"+Asset['asset-id']+"/icon.png";
            }
            this.wallet.injector.inject(icon, "width: 30px; height: 30px; min-width: 30px; min-height: 30px;")
            assetDiv.appendChild(icon);
            let info = document.createElement("div");
            this.wallet.injector.inject(info, "display: flex; flex-direction: column;");
            //asset amount
            let assetAmount = document.createElement("p");
            this.wallet.injector.inject(assetAmount, "color: white; font-size: 10px; margin-left: 5px; margin-top: 0px; margin-bottom: 0px;")
            assetAmount.innerHTML = `${Number(Asset.amount)/(10**Asset.asset[0].params.decimals)}`;
            //asset name
            let assetName = document.createElement("p");
            this.wallet.injector.inject(assetName, "color: white; font-size: 10px; margin-left: 5px; margin-top: 7px; margin-bottom: 0px;")
            
            try{
            assetName.innerHTML = Asset.asset[0].params['unit-name'].toUpperCase();
            }
            catch(e){
                assetName.innerHTML = "unnamed";
            }
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
            this.wallet.injector.inject(ghostDiv, `width: 100px; height: 40px;`);
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
        this.wallet.injector.inject(holder, `margin-left: 30px; margin-right: 30px; display:block;`)
        let titleDiv = document.createElement('div');
        this.wallet.injector.inject(titleDiv, "display: flex;")
        holder.appendChild(titleDiv)

        let backButton = document.createElement('img');
        
        backButton.src = backImg;
        backButton.className = "snapAlgoDefaultButton-alt";
        backButton.id = "assetBackButton"
        this.wallet.injector.inject(backButton, `
        width: 35px;
        height: 35px;
        border-radius: 100%;
        transform: translate(100%, 10%);
        cursor: pointer;
        `);
        backButton.addEventListener('click', ()=>{
            this.exitViewAssetScreen();
        });
        titleDiv.appendChild(backButton);

        let icon = document.createElement('img');
        this.wallet.injector.inject(icon, "height: 100px; width: 100px")
        icon.src = "https://asa-list.tinyman.org/assets/"+asset['asset-id']+"/icon.png";
        icon.addEventListener('error', (e)=>{
            e.target.src = coinImg;
        })
        titleDiv.appendChild(icon);
        
        let titleHolder = document.createElement("div");
        this.wallet.injector.inject(titleHolder, "display: flex; flex-direction: column;  margin-top: 10px; margin-left: 20px;");
        let title = document.createElement('p');
        this.wallet.injector.inject(title, "font-size: 20px; margin:0px;");
        title.innerHTML = asset.asset[0].params['name']
        titleHolder.appendChild(title);
        let amount = document.createElement('p');
        try{
        amount.innerHTML = `${Number(asset.amount)/(10**asset.asset[0].params.decimals)} ${asset.asset[0].params['unit-name'].toUpperCase()}`;
        }
        catch(e){
            amount.innerHTML = asset.amount;
        }
        this.wallet.injector.inject(amount, "margin: 0;");
        titleHolder.appendChild(amount);
        titleDiv.appendChild(titleHolder);

        let actionHolder = document.createElement("div");
        this.wallet.injector.inject(actionHolder, "display: flex;")
        let sendButton = document.createElement('img');
        sendButton.src = sendAltImg;
        sendButton.className = "snapAlgoHoverEffect";
        this.wallet.injector.inject(sendButton, "width: 35px; height: 35px;")
        sendButton.addEventListener('click', this.toggleSend.bind(this));

        actionHolder.appendChild(sendButton);

        let receiveButton = document.createElement('img');
        receiveButton.src = receiveImg;
        receiveButton.className = "snapAlgoHoverEffect";
        this.wallet.injector.inject(receiveButton, "width: 35px; height: 35px;")
        receiveButton.addEventListener('click', this.toggleReceive.bind(this));
        actionHolder.appendChild(receiveButton);
        

        

        titleHolder.appendChild(actionHolder);

        if(this.subScreen === "receive"){
            let receiveDiv = document.createElement("div");
            let reciveFlow = document.createElement('iframe');
            this.wallet.injector.inject(reciveFlow, "width: 100%; height: 150px;");
            reciveFlow.src = "https://snapalgo.com/receive";
            reciveFlow.scrolling = "no";
            reciveFlow.frameBorder = "0";
            receiveDiv.appendChild(reciveFlow);
            holder.appendChild(receiveDiv);
        }
        if(this.subScreen === "send"){
            
            let sendDiv = document.createElement("div");
            this.wallet.injector.inject(sendDiv, "display: flex; flex-direction: column; justify-content:center; margin-top: 20px;");
            let addressInput = document.createElement('input');
            this.wallet.injector.inject(addressInput, "width: 90%; height: 30px; font-size: 9px; margin: auto;")
            addressInput.placeholder = "Address";
            sendDiv.appendChild(addressInput);
            let amountInput = document.createElement('input');
            this.wallet.injector.inject(amountInput, "width: 90%; height: 30px; margin-left: 10px; margin: auto;")
            amountInput.type = "number";
            amountInput.placeholder = "Amount";
            sendDiv.appendChild(amountInput);

            let sendButton = document.createElement('button');
            
            sendButton.className = "snapAlgoDefaultButton-alt";
            this.wallet.injector.inject(sendButton, "width: 100px; height: 30px; margin: auto; margin-top: 10px;");
            sendButton.innerHTML = "Send";
            sendDiv.appendChild(sendButton);
            sendButton.addEventListener('click', ()=>{
                const decimals = asset.asset[0].params.decimals;
                if(asset.asset[0]['asset-id'] === 0){
                    return window.ethereum.request({
                        method: 'wallet_invokeSnap',
                        params: ["npm:algorand",{
                            method: 'transfer',
                            params:{
                                to: addressInput.value,
                                amount: Number(amountInput.value)*(10**6),
                                testnet: this.wallet.testnet,
                            }
                        }]
                    });
                }
                return window.ethereum.request({
                    method:  'wallet_invokeSnap',
                    params: ['npm:algorand', {
                        
                        method:  'transferAsset',
                        params:{
                            assetIndex: Number(asset['asset-id']),
                            to: addressInput.value,
                            amount: Number(amountInput.value)*(10**Number(decimals)),
                            testnet: this.wallet.testnet,
                        }
                    }]
                })
            });
            holder.appendChild(sendDiv);
        }

        return holder;
    }

    getTopDiv(){
        let topDiv = document.createElement("div");
        this.wallet.injector.inject(topDiv, "display: flex; margin-left: 37px; margin-right: 30px;");
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
        this.wallet.injector.inject(title, "font-size: 20px; margin-left: 10px;");
        topDiv.appendChild(title);

        return topDiv
    }

    async render(opts){
        if(opts === undefined){
            opts = {};
        }
        let holder = document.createElement("div");
        holder.id = "renderHolder";
        this.wallet.injector.inject(holder, "margin-top: 20px; display: block;");
        let viewHeight = 300;

        if(this.topDivOpen){
            let topDiv = this.getTopDiv();
            holder.appendChild(topDiv);
        }

        if(this.searchOpen){
            let searchScreen = await this.getSearchScreen();
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
            viewHeight = 300;
            if(this.subScreen === "receive"){
                viewHeight = 460;
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
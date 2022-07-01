import searchImg from '../images/search.png';
import coinsImg from '../images/coins.png';
import coinImg from '../images/coin.png';
import backImg from '../images/back.png';
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
        this.currentSearch = [];
        this.assetList = [
            {
                312769 : ["USDt", "tether", "tether usdt"]
            },
            {
                27165954 : ["PLANET","planets"]
            },
            {
                31566704 : ["usdc", "usdca", "usdc(a)"]
            },
            {
                283820866: ["XET", "Xfinite entertainment token"]
            },
            {
                287867876: ["OPUL","Opulous"]
            },
            {
                163650:["ARCC","Asia Reserve Currency Coin"]
            },
            {
                6547014: ["MCAU","Meld Gold"]
            },
            {
                
                137594422:["HEADLINE","HDL"],
            },
            {
                142838028:["FAME","ALGO FAM TOKEN"]
            },
            {
                226701642: ["Yieldly","Yieldly Token"]
            },
            {
                230946361: ["AlgoGems","GEMS"]
            }
          ];
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
    searchFor(search){
        function trimString(s) {
            let l = 0;
            let r = s.length-1;
            while(l < s.length && s[l] == ' ') l++;
            while(r > l && s[r] == ' ') r-=1;
            return s.substring(l, r+1);
          }
          
          function compareObjects(o1, o2) {
            var k = '';
            for(k in o1) if(o1[k] != o2[k]) return false;
            for(k in o2) if(o1[k] != o2[k]) return false;
            return true;
          }
          
          function itemExists(haystack, needle) {
            for(let i=0; i<haystack.length; i++) if(compareObjects(haystack[i], needle)) return true;
            return false;
          }
          
          function searchForAsset(search, assetList) {
            let results = [];
            search = trimString(search).toLowerCase(); // trim it
            for(let i=0; i<assetList.length; i++) {
              for(let name of Object.values(assetList[i])[0]) {
                if(name.toLowerCase().indexOf(search)!=-1) {
                  if(!itemExists(results, assetList[i])) results.push(assetList[i]);
                }
              }
            }
            return results;
          }
          
          return searchForAsset(search, this.assetList);
    }
    renderSearchTerms(searchTerms){
        searchTerms.innerHTML = "";
        
        for(let searchTerm of this.currentSearch){
            let optIn_optOut = "optIn";
            for(let asset of this.walletUI.assets){
                if(asset['asset-id'] === Number(Object.keys(searchTerm)[0])){
                    optIn_optOut = "optOut";
                }
            }
            let searchResult = document.createElement("div");
            searchResult.style = "display: flex;  justify-content: space-between;";
            let termTitle = document.createElement("p");
            termTitle.innerHTML = Object.values(searchTerm)[0][0];
            termTitle.style = "font-size: 15px;";
            searchResult.coinId = Object.keys(searchTerm)[0][0];
            searchResult.appendChild(termTitle);
            let optInButton = document.createElement("button");
            if(optIn_optOut === "optIn"){
                optInButton.innerHTML = "Opt In";
                optInButton.addEventListener("click", async (e)=>{
                    console.log(Object.keys(searchTerm)[0])
                    ethereum.request({
                        method: 'wallet_invokeSnap',
                        params: ['npm:algorand', {
                          method: 'AssetOptIn',
                          assetIndex: Number(Object.keys(searchTerm)[0])
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
                    ethereum.request({
                        method: 'wallet_invokeSnap',
                        params: ['npm:algorand', {
                            method: 'AssetOptOut',
                            assetIndex: Number(Object.keys(searchTerm)[0])
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
        search.addEventListener("keyup", (e)=>{
            let possibleIdNumber = Number(e.target.value);
            if(Number.isInteger(possibleIdNumber) && possibleIdNumber > 0){
                //done
            }
            this.currentSearch = this.searchFor(e.target.value);
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
        height: 125px; 
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
            assetName.innerHTML = Asset.asset[0].params['unit-name'];

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
            width: 75px;
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
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: white;
        border: 0.5px solid #555;
        left: 32px;
        top: 107px;
        cursor: pointer;
        `
        backButton.src = backImg;
        backButton.className = "snapAlgoHoverEffect";
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
            viewHeight = 400;
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
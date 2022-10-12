const IPFSURL = 'https://snapalgo-imgs.netlify.app/imgs' 
const exchangeImg = IPFSURL+"/exchange.svg"
export default class ExchangeScreen{
    constructor(walletUi, wallet){
        this.walletUi = walletUi;
        this.wallet = wallet;
        this.fromTicker = 'eth';
        this.toTicker = 'algo';
        this.toTickerElement = null;
        this.amountIn = null;
        this.swapData = {}
        this.fromTickerElement = null;
        this.tickers = ["algo","bsc","eth"]
        this.minAmount = null;
        this.email = "";
        this.subScreen = "standard";
    }

    async setTickers(e){
        let newValue = e.target.value;
        if(e.target.dataset.InOut === "in"){
            if(newValue === this.toTicker){
                this.toTickerElement.value = this.fromTicker;
                this.toTicker = this.fromTicker;
                
            }
            this.fromTicker = newValue;
        }
        if(e.target.dataset.InOut === 'out'){
            if(newValue === this.fromTicker){
                this.fromTickerElement.value = this.toTicker;
                this.fromTicker = this.toTicker;
                
            }
            this.toTicker = newValue;
        }
        await this.LoadMin();
        this.amountIn = this.minAmount;
    }

    generateSelector(startValue, InOut){
        
        const id="snapalgotickerselector"+String(Math.random())
        const selector = document.createElement('select');
        selector.className = "swapSelector";
        this.wallet.injector.inject(selector, "height: 25px; width: 75px;");
        selector.id = id;
        for(const ticker of this.tickers){
            let option = document.createElement('option');
            option.innerHTML = ticker;
            option.value = ticker;
            if(ticker === startValue){
                option.selected = true;
            }
            this.wallet.injector.inject(option);
            selector.appendChild(option);
        }
        selector.dataset.InOut = InOut;
        selector.addEventListener('change', this.setTickers.bind(this));
        if(InOut === "in"){
            this.fromTickerElement = selector;
        }
        if(InOut === 'out'){
            this.toTickerElement = selector;
        }
        return selector;
    } 

    async PreSwap(){
        console.log(this.fromTicker);
        console.log(this.toTicker);
        console.log(this.amountIn);
        this.wallet.openLoader("Generating Swap");
        const data = await window.ethereum.request({
            method: 'wallet_invokeSnap',
            params: [
                'npm:algorand', {
                method: 'preSwap',
                from: this.fromTicker,
                to: this.toTicker,
                amount: this.amountIn
                }
            ]
        });
        
        this.swapData = data.body;
        this.subScreen = "confirmation";
        this.wallet.closeLoader();
        console.log(this.swapData);
        return data;

    }

    setAmountIn(e){
        console.log("this.setAmountIn called");
        this.amountIn = e.target.value;
        console.log(this.amountIn);
    }

    async swap(){
        console.log("here");
        const data = await window.ethereum.request({
            method: 'wallet_invokeSnap',
            params: [
                'npm:algorand', {
                method: 'swap',
                from: this.fromTicker,
                to: this.toTicker,
                amount: this.amountIn,
                email: this.email
                }
            ]
        });
        console.log(data);
        return data;

    }

    async cancelSwap(){
        this.subScreen = "standard";
        this.render();
    }

    async LoadMin(){
        this.wallet.openLoader("Loading Swap Data", this.walletUi.screen);
        const amount = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: [
            'npm:algorand', {
            method: 'getMin',
            from: this.fromTicker,
            to: this.toTicker,
            }
        ]
        });
        this.minAmount = amount.minAmount;
        console.log("amount is: "); 
        console.log(amount);
        this.wallet.closeLoader();
        return this.minAmount;
    }

    async getStandardScreen(){
        const holder = document.createElement('div');
        this.wallet.injector.inject(holder, "display:flex; justify-content: center;");
        const topRow = document.createElement('div');
        holder.appendChild(topRow);
        this.wallet.injector.inject(topRow, "margin-top: 20px; display:flex; justify-content:center; flex-direction: column;");

        this.generateSelector(this.fromTicker, "in");
        
        

        const swapImg = document.createElement('img');
        console.log(swapImg)
        swapImg.src = exchangeImg;
        swapImg.width = "50"
        swapImg.height = "50"
        this.wallet.injector.inject(swapImg, "width: 50px; height: 50px;");
        let swapHolder = document.createElement('div');
        this.wallet.injector.inject(swapHolder, "display: flex; justify-content: center;");
        swapHolder.appendChild(swapImg)
        let AmountIn = document.createElement('input');
        AmountIn.value = this.minAmount;
        AmountIn.type = "number";
        AmountIn.step = "0.001";
        AmountIn.min = this.minAmount;
        AmountIn.addEventListener('change', this.setAmountIn.bind(this));
        this.wallet.injector.inject(AmountIn, "width: 275px; border-radius: 5px; height: 30px;");
        

        const selector = document.createElement('select');
        selector.className = "swapSelector";
        this.wallet.injector.inject(selector, "width: 275px; border-radius: 5px; height: 30px; margin-bottom: 15px;");
        for(const ticker of this.tickers){
            let option = document.createElement('option');
            option.innerHTML = ticker;
            option.value = ticker;
            if(ticker === this.toTicker){
                option.selected = true;
            }
            this.wallet.injector.inject(option);
            selector.appendChild(option);
        }

        selector.dataset.InOut = "out";
        selector.addEventListener('change', this.setTickers.bind(this));
        this.toTickerElement = selector;


        let swapButtonHolder = document.createElement('div');
        this.wallet.injector.inject(swapButtonHolder, "display: flex; justify-content: center;");
        let swapButton = document.createElement('button');
        swapButton.className = "snapAlgoDefaultButton-alt";
        swapButton.innerHTML = "swap";
        swapButton.addEventListener('click', this.PreSwap.bind(this));
        this.wallet.injector.inject(swapButton, "margin-top: 10px;");
        swapButtonHolder.appendChild(swapButton);
        
        topRow.appendChild(this.fromTickerElement);
        topRow.appendChild(AmountIn);
        topRow.appendChild(swapHolder);
        topRow.appendChild(this.toTickerElement);
        topRow.appendChild(selector);
        topRow.appendChild(swapButtonHolder);
        return holder;

    }

    async updateEmail(e){
        console.log(this.email);
        this.email = e.target.value;
        console.log(this.email);
    }

    async getConfirmationScreen(){

        const holder = document.createElement('div');
        this.wallet.injector.inject(holder, "display: block; margin-top: 25px; text-align: center;");

        const inputTitle = document.createElement('p');
        this.wallet.injector.inject(inputTitle, "margin: 5px; display: block;")
        inputTitle.innerHTML = "Would you like to swap"
        
        const inputInfo = document.createElement('p');
        this.wallet.injector.inject(inputInfo, 
            `background-color:white; 
            color:black; 
            font-size: 20px; 
            padding:5px; 
            border-radius: 5px; 
            display: block;
            width: 275px;
            height: 30px;
            margin: auto;
            `
        )
        inputInfo.innerHTML = String(this.swapData.amount).slice(0,12) +" "+ this.swapData.from;
        
        const outputTitle = document.createElement('p');
        this.wallet.injector.inject(outputTitle, "margin: 5px; display: block;")
        outputTitle.innerHTML = "for an estimated ";

        const outputInfo = document.createElement('p');
        this.wallet.injector.inject(outputInfo, 
            `background-color:white; 
            color:black; 
            font-size: 20px; 
            padding:5px; 
            border-radius: 5px; 
            display: block;
            width: 275px;
            height: 30px;
            margin: auto;
            `
        )
        outputInfo.innerHTML = String(this.swapData.estimatedAmount).slice(0, 12) +" "+ this.swapData.to;
        
        const emailInput = document.createElement('input');
        emailInput.placeholder = "optional email address";
        emailInput.type = "email";
        emailInput.addEventListener('change', this.updateEmail.bind(this));
        this.wallet.injector.inject(emailInput, "width: 275px; height: 30px;");

        const swapButton = document.createElement('button');
        swapButton.className =  "snapAlgoDefaultButton-alt";
        swapButton.innerHTML = "confirm";
        this.wallet.injector.inject(swapButton, "width: 75px; height: 35px;");
        swapButton.addEventListener('click', this.swap.bind(this));

        const cancelButton = document.createElement('button');
        cancelButton.className = "snapAlgoDefaultButton";
        cancelButton.innerHTML = "cancel";
        this.wallet.injector.inject(cancelButton, "width: 75px; height: 35px;");
        cancelButton.addEventListener('click', this.cancelSwap.bind(this));

        const initBreak = document.createElement('br');
        const masterBreak = this.wallet.injector.inject(initBreak, "display: block;");
        const initSpacer = document.createElement('br');
        const masterSpacer = this.wallet.injector.inject(initSpacer, "display: block;");

        
        
        
        holder.appendChild(inputTitle)
        holder.appendChild(masterBreak.cloneNode(true));
        
        holder.appendChild(inputInfo);
        holder.appendChild(masterBreak.cloneNode(true));
        
        holder.appendChild(outputTitle)
        holder.appendChild(masterBreak.cloneNode(true));
        
        holder.appendChild(outputInfo);
        holder.appendChild(masterBreak.cloneNode(true));
        
        holder.appendChild(emailInput);
        holder.appendChild(masterBreak.cloneNode(true));
        holder.appendChild(masterBreak.cloneNode(true));
        holder.appendChild(masterBreak.cloneNode(true));
        holder.appendChild(masterBreak.cloneNode(true));
        holder.appendChild(cancelButton);
        holder.appendChild(swapButton);
        
        return holder;

    }


    async render(opts){
        let screen = this.walletUi.getScreen();
        if(opts === undefined){
            opts = {};
        }
        if(this.minAmount === null){
            await this.LoadMin()
            this.amountIn = this.minAmount;
        }
        let holder;
        if(this.subScreen === "confirmation"){
            screen.height = 550;
            screen.width = 400;
            holder = await this.getConfirmationScreen();
        }
        else{
            screen.width = 400;
            screen.height = 450;
            holder = await this.getStandardScreen();
        }        

        

            
        
        screen.element.appendChild(holder);
        
        if(opts.hasOwnProperty("silent")){
            if(opts.silent){
                screen.silent = true;
            }
        }
        this.wallet.render(screen);
    }
}

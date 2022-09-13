
export default class ExchangeScreen{
    constructor(walletUi, wallet){
        this.walletUi = walletUi;
        this.wallet = wallet;
        this.toTicker = 'eth';
        this.fromTicker = 'algo';
        this.tickers = ["algo","bsc","eth"]
    }

    generateSelector(startValue){
        const id="snapalgotickerselector"+String(Math.random())
        if(startValue){
            
        }
        const selector = document.createElement('select');
        this.wallet.injector.inject(selector, "padding: 20px; margin:10px;");
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
        return selector;
    } 



    async render(opts){
        if(opts === undefined){
            opts = {};
        }

        const holder = document.createElement('div');
        this.wallet.injector.inject(holder, "margin-top: 20px; display:flex; justify-content:center;");

        const from = this.generateSelector('eth');
        const to = this.generateSelector('algo');
        holder.appendChild(from);
        holder.appendChild(to);

            
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

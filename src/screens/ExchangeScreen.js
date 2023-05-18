const IPFSURL = 'https://snapalgo-imgs.netlify.app/imgs' 
const exchangeImg = IPFSURL+"/AlgoIconDownArrow.svg"
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


    async getStandardScreen(){
        const holder = document.createElement('div');
        let swapFlow = document.createElement('iframe');
        this.wallet.injector.inject(swapFlow, "width: 100%; height: 450px;");
        swapFlow.src = "https://snapalgo.io/swap";
        swapFlow.scrolling = "no";
        swapFlow.frameBorder = "0";
        holder.appendChild(swapFlow);
        return holder;

    }





    async render(opts){
        let screen = this.walletUi.getScreen();
        if(opts === undefined){
            opts = {};
        }
        
        screen.width = 400;
        screen.height = 600;
        const holder = await this.getStandardScreen();        
        screen.element.appendChild(holder);
        
        if(opts.hasOwnProperty("silent")){
            if(opts.silent){
                screen.silent = true;
            }
        }
        this.wallet.render(screen);
    }
}

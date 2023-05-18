
const QRCode = require('qrcode')
export default class ReceiveScreen{
    constructor(walletUI, wallet){
        this.walletUI = walletUI;
        this.wallet = wallet;
    }

    async render(opts){      
        if(opts === undefined){
            opts = {};
        }          
        let holder = document.createElement("div");
        this.wallet.injector.inject(holder, "display: flex; justify-content: center; margin-top: 20px;");
        let recDiv = document.createElement('div');
        this.wallet.injector.inject(recDiv, "display:flex; justify-content: center;");
        holder.appendChild(this.wallet.masterBreak.cloneNode(true));
        holder.appendChild(this.wallet.masterBreak.cloneNode(true));
        holder.appendChild(recDiv);
        let reciveFlow = document.createElement('iframe');
        this.wallet.injector.inject(reciveFlow, "width: 100%; height: 150px;");
        reciveFlow.src = "https://snapalgo.io/receive";
        reciveFlow.scrolling = "no";
        reciveFlow.frameBorder = "0";
        recDiv.appendChild(reciveFlow);
        let screen = this.walletUI.getScreen();
        screen.element.appendChild(holder);
        screen.height = 450;
        screen.width = 400;
        if(opts.hasOwnProperty('silent')){
            if(opt.silent){
                screen.silent = true;
            }
        }
        this.wallet.render(screen);
    }
}
import QRCode from 'qrcode'
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
        holder.style = "display: flex; justify-content: center; margin-top: 20px;";
        let assetcontainer = document.createElement('div');
        document.createElement("p");
        console.log("accounts is: ");
        console.log(this.wallet.accounts);
        let addressQR = (await QRCode.toDataURL(this.wallet.accounts[0].addr));
        
        let recDiv = document.createElement('div');
        recDiv.style = "display:flex; justify-content: center;";
        holder.appendChild(document.createElement('br'));
        holder.appendChild(document.createElement('br'));
        holder.appendChild(recDiv);

        let qrCodeImage = document.createElement('img');
        qrCodeImage.src = addressQR;
        qrCodeImage.style = "width: 150px; height: 150px; margin-left: 10px;";
        recDiv.appendChild(qrCodeImage);

        let addressDiv = document.createElement('div');
        addressDiv.style = "display: flex; flex-direction: column; justify-content: center; margin-left: 10px; width: 150px;";
        let address = document.createElement('p');
        address.style = "font-size: 11px; word-break: break-all;";
        address.innerHTML = this.wallet.accounts[0].addr;
        let copyButton = document.createElement('button');
        copyButton.id = "SnapAlgoWalletRecieveCopyButton";
        copyButton.addEventListener('click',
          ()=>{
              
              navigator.clipboard.writeText(this.wallet.accounts[0].addr);
          }
        );
        

        copyButton.style = "width: 100%;  border: white; cursor: pointer;";
        copyButton.innerHTML = "Copy Address";
        addressDiv.appendChild(address);
        addressDiv.appendChild(copyButton);
        recDiv.appendChild(addressDiv);
        let screen = this.walletUI.getScreen();
        screen.element.appendChild(holder);
        screen.height = 350;
        screen.width = 400;
        if(opts.hasOwnProperty('silent')){
            if(opt.silent){
                screen.silent = true;
            }
        }
        this.wallet.render(screen);
    }
}
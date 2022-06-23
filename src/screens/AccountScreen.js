export default class AccountScreen{
    constructor(walletUI, wallet){
        this.walletUI = walletUI
        this.wallet = wallet
        this.screen = "start"
    }

    getStartScreen(){
        let holder = document.createElement('div');
        holder.style = "display:flex; margin-left: 30px; margin-right: 30px; height: 150px; margin-top: 15px;";
        
        let createAccountButton =  document.createElement('button')
        createAccountButton.style = "width: 100%; height:100%; background-color: #2176ff; color: white; cursor: pointer; border-radius: 10px;";
        createAccountButton.innerHTML = "Create New Account";
        createAccountButton.className = "snapAlgoHoverEffect";
        holder.appendChild(createAccountButton);

        let importAccountButton = document.createElement('button');
        importAccountButton.style = "width: 100%; height: 100%; background-color: #29E7CD; color:white; cursor: pointer; border-radius: 10px;";
        importAccountButton.innerHTML = "import Account";
        importAccountButton.className = "snapAlgoHoverEffect"
        holder.appendChild(importAccountButton);

        let switchAccountButton = document.createElement('button');
        switchAccountButton.style = "width: 100%; height: 100%; background-color: #FF4365; color:white; cursor: pointer; border-radius: 10px;";
        switchAccountButton.innerHTML = "switch Account";
        switchAccountButton.className = "snapAlgoHoverEffect"
        holder.appendChild(switchAccountButton);
        return holder;
    }

    getCreateScreen(){
        let holder = document.createElement("div");
        let AccountName = document.createElement("input")
        
        let createButton = documnet.createElement("button")
        createButton.innerHTML = "Create Account";
    }

    async render(opts){
        if(opts === undefined){
            opts = {}
        }
        let holder = document.createElement("div");
        if(this.screen === 'start'){
            holder.appendChild(this.getStartScreen());
        }

        let screen = this.walletUI.getScreen();

        if(opts.hasOwnProperty("silent")){
            if(opts.silent){
              screen.silent = true;
            }
        }
        screen.width =  400;
        screen.height = 350;
        screen.element.appendChild(holder);
        this.wallet.render(screen);
    }
}
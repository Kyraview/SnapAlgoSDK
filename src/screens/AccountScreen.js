export default class AccountScreen{
    constructor(walletUI, wallet){
        this.walletUI = walletUI
        this.wallet = wallet
        this.screen = "start"
        this.accountNameElement = null;
    }

    getStartScreen(){
        let holder = document.createElement('div');
        holder.style = "display:flex; margin-left: 30px; margin-right: 30px; height: 50px; margin-top: 15px;";
        
        let createAccountButton =  document.createElement('button')
        createAccountButton.style = "width: 100%; height:100%; background-color: #2176ff; color: white; cursor: pointer; border-radius: 10px;";
        createAccountButton.innerHTML = "Create New Account";
        createAccountButton.className = "snapAlgoHoverEffect";
        createAccountButton.addEventListener('click', this.toggleCreateScreen.bind(this));
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

    async toggleCreateScreen(){
        if(this.screen === 'start'){
            this.screen = 'createScreen';
        }else{
            this.screen = 'start';
        }
        this.render();
    }

    getCreateScreen(){
        let holder = document.createElement("div");
        holder.style = `
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            margin-right: 30px;
            margin-top: 30px;
        `;
        this.accountNameElement = document.createElement("input")
        this.accountNameElement.placeholder = "Account Name";
        holder.appendChild(this.accountNameElement);
        
        let createButton = document.createElement("button")
        createButton.innerHTML = "Create Account";
        createButton.addEventListener('click', this.createAccount.bind(this));
        holder.appendChild(createButton);
        return holder;
    }

    async createAccount(){
        let accountName = this.accountNameElement.value;
        await ethereum.request({
            method: 'wallet_invokeSnap',
            params: [
              "npm:algorand", {
                method: 'createAccount',
                name: accountName
              }
            ]
        });
        console.log("Account created");
    }



    async render(opts){
        if(opts === undefined){
            opts = {}
        }
        let holder = document.createElement("div");
        
        holder.appendChild(this.getStartScreen());
        

        if(this.screen === 'createScreen'){
            holder.appendChild(this.getCreateScreen());
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
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
        createAccountButton.style = `
            width: 100%; 
            height: 100%; 
            background-color: #830bba; 
            
            color:white; 
            cursor: pointer; 
            border-radius: 10px;
            `;
        createAccountButton.innerHTML = "Create New Account";
        createAccountButton.className = "snapAlgoHoverEffect2";
        createAccountButton.addEventListener('click', this.toggleCreateScreen.bind(this));
        holder.appendChild(createAccountButton);

        let importAccountButton = document.createElement('button');
        importAccountButton.style = `
        width: 100%; 
        height: 100%; 
        background-color: #963beb; 
        color:white; 
        cursor: pointer; 
        border-radius: 10px`;
        importAccountButton.innerHTML = "Import Account";
        importAccountButton.className = "snapAlgoHoverEffect2"
        holder.appendChild(importAccountButton);

        let switchAccountButton = document.createElement('button');
        switchAccountButton.style = `
        width: 100%; 
        height: 100%; 
        background-color: #c00fb4; 
        color:white;  
        cursor: pointer; 
        border-radius: 10px;`;
        switchAccountButton.innerHTML = "Account Tools";
        switchAccountButton.className = "snapAlgoHoverEffect2"
        switchAccountButton.addEventListener('click', this.toggleInfoScreen.bind(this));
        holder.appendChild(switchAccountButton);
        return holder;
    }

    async toggleCreateScreen(){
        if(this.screen === 'createScreen'){
            this.screen = 'start';
        }else{
            this.screen = 'createScreen';
        }
        this.render();
    }

    async toggleInfoScreen(){
        if(this.screen === 'infoScreen'){
            this.screen = 'start';
        }else{
            this.screen = 'infoScreen';
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

    getInfoScreen(){
        let holder = document.createElement("div");
        holder.style = `
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            margin-right: 30px;
            margin-top: 30px;
        `;
        let mnemonicButton = document.createElement("button")
        mnemonicButton.innerHTML = "Show Mnemonic";
        mnemonicButton.addEventListener('click', async ()=>{
            await ethereum.request({
                method: 'wallet_invokeSnap',
                params: [
                    "npm:algorand", {
                    method: "displayMnemonic",
                    }
                ]
            });
        })
        holder.appendChild(mnemonicButton);

        let SwitchAccount = document.createElement("button")
        SwitchAccount.innerHTML = "Switch Account";
        SwitchAccount.addEventListener('click', ()=>window.algorand.enable());
        holder.appendChild(SwitchAccount);
        return holder;
    }

    async createAccount(){
        let accountName = this.accountNameElement.value;
        this.wallet.openLoader("Creating Account");
        await ethereum.request({
            method: 'wallet_invokeSnap',
            params: [
              "npm:algorand", {
                method: 'createAccount',
                name: accountName
              }
            ]
        });
        this.screen = "start";
        this.render();
        console.log("Account created");
    }



    async render(opts){
        if(opts === undefined){
            opts = {}
        }
        let holder = document.createElement("div");
        
        holder.appendChild(this.getStartScreen());
        let width =  400;
        let height = 250;

        if(this.screen === 'createScreen'){
            holder.appendChild(this.getCreateScreen());
            height = 350;
        }

        if(this.screen === 'infoScreen'){
            holder.appendChild(this.getInfoScreen());
            height = 350;
        }

        let screen = this.walletUI.getScreen();
        screen.width = width;
        screen.height = height;

        if(opts.hasOwnProperty("silent")){
            if(opts.silent){
              screen.silent = true;
            }
        }

        screen.element.appendChild(holder);
        this.wallet.render(screen);
    }
}
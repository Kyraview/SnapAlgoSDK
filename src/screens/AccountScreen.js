export default class AccountScreen{
    constructor(walletUI, wallet){
        this.walletUI = walletUI
        this.wallet = wallet
        this.screen = "start";
        
        this.accountNameElement = null;
    }

    getStartScreen(){
        let holder = document.createElement('div');
        
        this.wallet.injector.inject(holder, "display:flex; justify-content: center; margin-top: 20px;");
        
        let createAccountButton =  document.createElement('button')
        
        createAccountButton.innerHTML = "Create New Account";
        createAccountButton.className = "snapAlgoDefaultButton";
        this.wallet.injector.inject(createAccountButton);
        createAccountButton.addEventListener('click', this.toggleCreateScreen.bind(this));
        holder.appendChild(createAccountButton);

        let importAccountButton = document.createElement('button');
        importAccountButton.className = "snapAlgoDefaultButton";
        importAccountButton.innerHTML = "Import Account";
        this.wallet.injector.inject(importAccountButton);
        importAccountButton.addEventListener('click', this.toggleImportScreen.bind(this));
        holder.appendChild(importAccountButton);

        let switchAccountButton = document.createElement('button');
        
        switchAccountButton.innerHTML = "Account Tools";
        switchAccountButton.className = "snapAlgoDefaultButton";
        this.wallet.injector.inject(switchAccountButton);
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

    async toggleImportScreen(){
        if(this.screen === 'importScreen'){
            this.screen = 'start';
        }
        else{
            this.screen = 'importScreen';
        }
        this.render();
    }

    getCreateScreen(){
        let holder = document.createElement("div");
        this.wallet.injector.inject(holder, 
        `
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            margin-right: 30px;
            margin-top: 30px;
        `)
        this.accountNameElement = document.createElement("input")
        this.wallet.injector.inject(this.accountNameElement, "width: 80%;  margin: auto; height:25px; border-radius: 10px;")
        this.accountNameElement.placeholder = "Account Name";
        holder.appendChild(this.accountNameElement);
        
        let createButton = document.createElement("button")
        createButton.innerHTML = "Create Account";
        createButton.className = "snapAlgoDefaultButton-alt";
        this.wallet.injector.inject(createButton, "width: 80%; height: 27px; padding: 2px; margin: auto; margin-top: 10px;")
        createButton.addEventListener('click', this.createAccount.bind(this));
        holder.appendChild(createButton);
        return holder;
    }

    getInfoScreen(){
        let holder = document.createElement("div");
        this.wallet.injector.inject(holder, 
        `
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-left: 30px;
            margin-right: 30px;
            margin-top: 30px;
        `)
        let SwitchAccount = document.createElement("button")
        SwitchAccount.className = "snapAlgoDefaultButton-alt";
        SwitchAccount.innerHTML = "Switch Account";
        this.wallet.injector.inject(SwitchAccount, "width: 100%; height: 25px;");
        SwitchAccount.addEventListener('click', ()=>window.algorand.enable());
        holder.appendChild(SwitchAccount);

        let mnemonicButton = document.createElement("button")
        mnemonicButton.innerHTML = "Show Mnemonic";
        mnemonicButton.className = "snapAlgoDefaultButton-alt";
        this.wallet.injector.inject(mnemonicButton, "width: 100%; height: 25px;");
        mnemonicButton.addEventListener('click', async ()=>{
            await ethereum.request({
                method: 'wallet_invokeSnap',
                params: {
                    snapId:"npm:algorand", 
                    request:{
                        method: "displayMnemonic",
                    }
                }
            });
        })
        holder.appendChild(mnemonicButton);


        return holder;
    }

    getImportScreen(){
        let holder = document.createElement("div");
        this.wallet.injector.inject(holder, `
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100px;
        
        `
        );
        let importButton = document.createElement('button');
        importButton.innerHTML = "Import Account";
        importButton.addEventListener('click', ()=>{
            window.open("https://snapalgo.com/importaccount", '_blank');
        });
        
        importButton.className = "snapAlgoDefaultButton-alt";
        this.wallet.injector.inject(importButton, "width: 60%; margin: auto;");
        holder.appendChild(importButton);
        return holder;
    }

    async createAccount(){
        let accountName = this.accountNameElement.value;
        this.wallet.openLoader("Creating Account");
        await ethereum.request({
            method: 'wallet_invokeSnap',
            params: {
              snapId:"npm:algorand", 
              request:{
                method: 'createAccount',
                params:{
                    name: accountName
                }
              }
            }
        });
        this.screen = "start";
        window.algorand.enable();
        console.log("Account created");
    }



    async render(opts){
        if(opts === undefined){
            opts = {}
        }
        let holder = document.createElement("div");
        this.wallet.injector.inject(holder);
        holder.appendChild(this.getStartScreen());
        let width =  400;
        let height = 300;

        if(this.screen === 'createScreen'){
            holder.appendChild(this.getCreateScreen());
            height = 365;
        }

        if(this.screen === 'infoScreen'){
            holder.appendChild(this.getInfoScreen());
            height = 365;
        }

        if(this.screen === 'importScreen'){
            
            holder.appendChild(this.getImportScreen());
            height = 365;
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
import $ from "jquery";
require("jquery-ui/ui/widgets/draggable");
import './chathead.scss';
import walletImg from './images/wallet.png';
import settingsImg from './images/settings.png';

import WalletUI from "./WalletUI";
export default class WalletBubble{
    constructor(){        
        this.isMoving = false;
        this.isdragging = false;
        this.walletMode = false;
        this.lastX = '300px';
        this.lastY = '300px';
        this.defaultWidth = 400;
        this.defaultHeight = 300;
        this.width = 400;
        this.height = 300;
        this.accounts = [];
        this.network = "";
        this.html = "";
        this.receiveScreenOpen = false;
        this.walletUi = new WalletUI(this);
        this.buildUi();
        this.bubble = document.getElementById("snapAlgoChatHeadBubble");
        this.testnet = false;
        $(this.walletContainer).draggable({"handle":$(this.bubble)});

        this.bubble.addEventListener('mousedown',function(){
            console.log("here");
            this.isdragging = false;
        });

        this.bubble.addEventListener('mousemove',this.#mouseMove.bind(this));
        this.bubble.addEventListener('mouseup', this.#mouseUp.bind(this));
        this.bubble.addEventListener('click',this.toggleUi.bind(this));
    }


    importAccounts(acccounts){
      this.accounts = acccounts;
    }
    importNetwork(network){
      this.network = network;
      if(this.network === "testnet-v1.0"){
        this.testnet = true;
      }
    }
    buildUi(){
      //bubble chat head thing
      const bubbleElement = document.createElement('div');
      bubbleElement.className = "bubble";
      bubbleElement.id = "snapAlgoChatHeadBubble";
      document.body.appendChild(bubbleElement);
      $("#snapAlgoChatHeadBubble").draggable();

      //wallet container
      const walletContainer = document.createElement('div');
      walletContainer.id = "snapAlgoWalletContainer";
      walletContainer.className = "gradient-border";
      this.walletContainer = walletContainer;
      document.body.appendChild(walletContainer);
      
      //wallet body
      this.walletBody = document.createElement('div');
      this.walletBody.className = "wallet-body";
      walletContainer.appendChild(this.walletBody);

      //html box
      this.walletHtmlBox = document.createElement('div');
      this.walletHtmlBox.id = "snapAlgoWalletHtmlBox";
      this.walletHtmlBox.className = "wallet-html-box";
      this.walletBody.appendChild(this.walletHtmlBox);

      //wallet footer
      this.walletFooter = document.createElement('div');
      this.walletFooter.className = "wallet-footer";
      this.walletFooter.id = "snapAlgoWalletWalletFooter"
      this.walletBody.appendChild(this.walletFooter);
      
      
      //icons
      this.walletfooterIcon = document.createElement('img');
      this.walletfooterIcon.src = walletImg;
      this.walletfooterIcon.id = "snapAlgoWalletWalletFooterIcon";
      this.walletfooterIcon.className = "wallet-icon";

      this.settingsfooterIcon = document.createElement('img');
      this.settingsfooterIcon.src = settingsImg;
      this.settingsfooterIcon.id = "snapAlgoWalletWalletFooterIcon";
      this.settingsfooterIcon.className = "wallet-icon";

      this.walletFooter.appendChild(this.walletfooterIcon);
      this.walletFooter.appendChild(this.settingsfooterIcon);
      
    }

    #mouseUp(e){
      
        e.preventDefault();

        let lastY = window.event.clientY;
        let lastX = window.event.clientX;
        let swidth = $( window ).width();
        if(this.isdragging && !this.walletMode){
          
          if(lastX > (swidth/2)){
            $(this.bubble).css("top", lastY).css("left", (swidth-55) + "px").css("transition", "all 0.3s");
          }else{
            $(this.bubble).css("top", lastY).css("left", "-25px").css("transition", "all 0.3s");
          }
        }
      
    }

    #mouseMove(e){
      this.isdragging = true;

      $(this.bubble).css("transition", "all 0s");
      $(this.walletContainer)
        .css("top", this.bubble.style.top)
        .css("left", this.bubble.style.left)
        .css("transform", "translate(5%,5%)")
        .css("transition", "all 0s");
      if(this.walletMode){ 
        $(this.walletContainer).css("transition-delay", "0s");
        this.lastX = this.bubble.style.left;
        this.lastY = this.bubble.style.top;
      }
      
    }

    setWidth(pixels){
      this.width = pixels;
      $(this.walletContainer)
        .css("width", pixels+'px')
        .css("top", this.bubble.style.top)
        .css("left", this.bubble.style.left)
        .css("transition", "all 0.3s");
      $(this.walletBody).css("width", (pixels-4)+'px').css("transition", "all 0.3s");
    }

    setHeight(pixels){
      this.height = pixels;
      $(this.walletContainer).css("height", pixels+'px').css("transition", "all 0.3s");
      $(this.walletBody).css("height", (pixels-4)+'px').css("transition", "all 0.3s");
    }
    setHtml(html){
      console.log("set html called with this html: ")
      console.log(html);
      this.html = html;
      this.walletHtmlBox.innerHTML = html;
    }
    setElement(element){
      this.walletHtmlBox.innerHTML = "";
      this.walletHtmlBox.appendChild(element);
    }

    open(screen){
      if(screen){
        if(screen.hasOwnProperty("x")){
          this.lastX = screen.x;
        }
        if(screen.hasOwnProperty("y")){
          this.lastY = screen.y;
        }
        if(screen.hasOwnProperty("width")){
          this.setWidth(screen.width);
        }
        if(screen.hasOwnProperty("height")){
          this.setHeight(screen.height);
        }
        if(screen.hasOwnProperty("html")){
          this.setHtml(screen.html);
        }
      }
      $(this.bubble).css("top", this.lastY)
      .css("left", this.lastX)
      .css("transition", "all 0.3s");
      $(this.walletContainer)
      .css("top", this.lastY)
      .css("left",this.lastX)
      .css("transform", "translate(5%,5%)")
      .css("transition", "all 0s");
      $(this.walletContainer)
      .css("width", this.width+"px")
      .css("height", this.height+"px")
      .css("visibility", "visible")
      .css("transition", "width 0.2s ease 0.3s, height 0.2s ease 0.3s, visibility 0s ease 0.3s");
      this.walletMode = true;
    }
    close(){
      let swidth = $( window ).width();
      if(parseInt(this.lastX) > (swidth/2)){
        $(this.bubble).css("top", this.lastY).css("left", (swidth-55) + "px").css("transition", "all 0.3s ease 0.2s");
      }else{
        $(this.bubble).css("top", this.lastY).css("left", "-25px").css("transition", "all 0.3s ease 0.2s");
      }
      $(this.walletContainer)
        .css("width", "0px")
        .css("height", "0px")
        .css("visibility", "hidden")
        .css("transition", "width 0.4s");
      $(this.walletContainer).css("transition", "height 0.2s ease 0s, visibility 0s ease 0.2s, width 0.2s ease 0s");
      this.walletMode = false;
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve();
        },500); //time it takes for the wallet to close
      })
    }

    setX(x){
      this.lastX = x
    }

    setY(y){
      this.lastY = y
    }

    openWallet(){
      this.updateWalletScreen();
      this.open();
    }

    toggleUi(){
      if(!this.walletMode){
        this.open();
      }
      else{
        this.close();
      }
    }

    preLoad(){
      
      
      return this.walletUi.preLoad();
    }
    render(screen){
      
      
      
      
      
      
      this.setElement(screen.element);
      
      if(!screen.hasOwnProperty('silent')){
          screen.silent = false;
      }
      if(!screen.silent){
        if(screen.hasOwnProperty("width")){
          this.setWidth(screen.width);
        }
        if(screen.hasOwnProperty("height")){
          this.setHeight(screen.height);
        }
      }


  }

    showWalletScreen(){
      //console.log("bubble show wallet called");
      //console.log(this.walletScreen);
      //return this.walletScreen.render(this.walletScreen.updateWalletScreen(), {"silent": true});
      
      this.render(this.walletUi.getScreen());
    }
    
    /**
     * @param {string} html
     * @param {callback} callback
     * @param {string} type
     * @param {string} title
     * @param {number} height
     * @param {number} width
     * @param {number} x
     * @param {number} y
    */
    async modal(props){
      let modalControl = $.Deferred().always();
      if(!props.hasOwnProperty("title")){
        props.title = "";
      }
      if(!props.hasOwnProperty("type")){
        props.type = "confirm/cancel";
      }
      if(!props.hasOwnProperty("html")){
        props.html = "";
      }
      if(!props.hasOwnProperty("callback")){
        props.callback = ()=>{};
      }
      if(!props.hasOwnProperty("height")){
        props.height = this.height;
      }
      if(!props.hasOwnProperty("width")){
        props.width = this.width;
      }
      if(!props.hasOwnProperty("confirmText")){
        props.confirmText = "Confirm";
      }
      if(!props.hasOwnProperty("cancelText")){
        props.cancelText = "Cancel";
      }
      if(props.type === "confirm/cancel"){
        console.log("cancel confirm type")
        props.html = '<div style="display:flex; flex-direction: column; justify-content: space-between; height:100%;">'+props.html+ `
            <div style="display:flex; justify-content: center; margin: 10px;">
              <button class="modal-button" id="snapAlgoConfirmButton">${props.confirmText}</button>
              <button class="modal-button" id="snapAlgoCancelButton">${props.cancelText}</button>
            </div>
          </div>
        `
      }
      if(props.type === "confirm"){
        props.html = '<div style="display:flex; flex-direction: column; justify-content: center; height:100%;">'+props.html+ `
            <div style="display:flex; justify-content: space-evenly; margin: 10px;">
              <button class="modal-button" id="snapAlgoConfirmButton">Confirm</button>
            </div>
          </div>
        `
      }
      console.log(props.html);
      this.open({width:props.width, height:props.height, html:props.html});
      $("#snapAlgoCancelButton").on("click",()=>{
        console.log("here is the cancel button");
        let output = {"canceled": true, "confirmed":false, "data": props.callback()};
        this.close();
        modalControl.resolve(output);
      });
      $("#snapAlgoConfirmButton").on("click", ()=>{
        console.log("here is the confirm button");
        let output = {"canceled": false, "confirmed":true, "data": props.callback()};
        this.close();
        modalControl.resolve(output);
      })
      console.log(props.html);
      
      return modalControl.promise();
    }

}


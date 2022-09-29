/*
This is used to prevent page css from being interacting with the floating wallet;
*/

const masterCSS = `
#snapAlgoWalletContainer{
    /*
    Todo: edit wallet to work with this property
    all: unset;*/
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 0px;
    height: 0px;
    background-color: white;
    border-radius: 10%;
    border: 0.5px solid black;
    z-index: 999999;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  

  select{
    
    background-color: #963beb;
    color:white;
    font-family: 'Open Sans', sans-serif;
    appearance: auto;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    
    
  }
  select:hover{
    background-color:#F00699;
  }
  .swapSelector{
    transform:translateY(7px);
  }
  .swapSelector:hover{
    background-color:#F00699;
    transform:translateY(7px);
  }
  option{
    background-color:#963beb;
    
  }
  option:hover{
    box-shadow: 0 0 10px 100px #F00699 inset;
  }

  input{
    border: 1px solid white;
    border-radius: 25%;
    text-align: center;
    padding: 2px;
    border-radius: 2px;
  }

  
  .mainFont{
    font-family: 'Kantumruy Pro', sans-serif;
  }
  .secoundaryFont{
    font-family: 'Open Sans', sans-serif;
  }

  .wallet-html-box{
    height: 100%;
    width: 100%;
    color:white;
    flex-grow: 1;
    background-color: #222;
  }

  
  .bubble{
    border-radius: 50%;
    position: fixed;
    z-index: 1000000;
    top: 50%;
    left: -25px;
    box-shadow: 0 0px 20px rgba(0,0,0,0.19), 0 0px 6px rgba(0,0,0,0.23);
    /*background: url("https://s2.coinmarketcap.com/static/img/coins/200x200/4030.png") white;*/
    
    padding:0px;
    margin: 0px;
    
    cursor: pointer;
    
    
  }
  .bubble:hover{
    transition: transform 0.3s;
    transform: scale(1.1);
  }

  .wallet-body {
    background-color: #222;
    margin: auto;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    
  }

  
  

  .wallet-icon {
    width: 20px;
    height: 20px;
    margin-top:auto;
    margin-bottom: auto;
    margin-left: 2px;
    margin-right: 2px;
    cursor: pointer;
  }
  .wallet-footer {
    background-color: #333;
    /*border-top: 1px solid white;*/
    width: 100%;
    min-height: 30px;
    display: flex;
    justify-content: center;
  }

  .snapAlgoWalletButton{
    background: linear-gradient(120deg, #ffffff, #ffffff, #f37915, #ffee00);
    background-size: 800% 800%;
  }
  .snapAlgoWalletButton:hover{
    
    animation: buttonHover 0.4s;
    animation-direction: both;
    animation-fill-mode: both;
  }

  .snapAlgoHoverEffect{
    cursor: pointer;
  }

  .snapAlgoHoverEffect:hover{
    animation: buttonHover 0.3s;
    animation-direction: both;
    animation-fill-mode: both;
  }
  
  
  .snapAlgoHoverEffect2:hover{
    animation: buttonHover2 0.2s;
    animation-direction: both;
    animation-fill-mode: both;
  }
  .snapAlgoDefaultButton {
    
    text-align: center;
    width: 100px;
    font-size: 12px;
    font-family: 'Kantumruy Pro', sans-serif;
    color: white;
    cursor: pointer;
    margin: 2px;
    height: 45px;
    text-align:center;
    border: none;
    background-position: 0% 0%;
    background-size: 300% 300%;
    
    background-image: radial-gradient(circle at 110%,  #F00699 60%,  #963beb 20% );
    

    border-radius: 10px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }

  .snapAlgoDefaultButton:hover {
    background-position: 70% -0%;
    background-size: 500% 500%;
    color: white;
    transform: scale(1.05);
    moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
  

  .snapAlgoDefaultButton-alt{
    
    text-align: center;
    width: 100px;
    font-size: 12px;
    font-family: 'Kantumruy Pro', sans-serif;
    color: white;
    cursor: pointer;
    margin: 2px;
    height: 45px;
    text-align:center;
    border: none;
    background-position: 0% 0%;
    background-size: 300% 300%;
    border-radius: 10px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    background-image: radial-gradient(circle at 110%,  #F00699 60%,  #0ba0e5 20% );
  }

  .snapAlgoDefaultButton-alt:hover {
    background-position: 70% -0%;
    background-size: 500% 500%;
    color: white;
    transform: scale(1.05);
    moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
  
`

export default class CSSInjector {

    constructor(css){
        this.css = css;
        this.cssTree = this.parse(masterCSS);
    }
    parse(css){
        let halfParsed = css.split('}')
        const parsed = Array.from(halfParsed.map((parsel) => {
            let splits = parsel.split('{')
            let props = splits[1]
            if(props){
                props = props.replace(/ {4}|[\t\n\r]/gm, '')
            }
            else{
                return
            }
            
            
            return {id:splits[0].trim(), properties: props}
        }
        ))
        parsed.pop()
        let output = {}
        for(let ruleSet of parsed){
            
            if(ruleSet.id.includes(':')){
                let splitID = ruleSet.id.split(':')
                let id = splitID[0]
                let opperation = splitID[1]
                if(!output[id]){
                    output[id] = {}
                }
                output[id][opperation] = ruleSet.properties
            }
            else{
                if(!output[ruleSet.id]){
                    output[ruleSet.id] = {}
                }
                output[ruleSet.id].css = ruleSet.properties
            }
        }
        return output;
    }
    inject(element, css){
        let injectedCSS = 'all:unset;';
        const elCSS = this.cssTree[element.nodeName.toLowerCase()]
        const classCSS = this.cssTree['.'+element.className]
        const idCSS = this.cssTree['#'+element.id]
        const inlineCSS = css;
        injectedCSS += (elCSS && elCSS.css)? elCSS.css : ''
        injectedCSS += (classCSS && classCSS.css)? classCSS.css : '' 
        injectedCSS += (idCSS && idCSS.css)? idCSS.css : ''
        injectedCSS += inlineCSS? inlineCSS : ''
        if(elCSS){
            element = this.#injectPsudo(element, elCSS, injectedCSS)
        }
        if(classCSS){
            
            element = this.#injectPsudo(element, classCSS, injectedCSS)
        }
        if(idCSS){
            element =this.#injectPsudo(element, idCSS, injectedCSS)
        }
        element.style = injectedCSS;
        
        return element;


    }
    #injectPsudo(element, object, css){
        for(let key in object){
            if(key === 'css'){
                //do nothing
            }
            else if(key === 'hover'){
                element.addEventListener("mouseover", (event) => {
                    element.style = css+object[key];
                });
                element.addEventListener('mouseout', (event)=>{
                    element.style = css;
                })
            }
            else{
                
                element.addEventListener(key, (event) => {
                    element.style = css+object[key];
                });
            }
        }
        return element

    }
    addCSS(css){
        this.css += css;
        this.cssTree = this.parse(this.css);
    }
    
}

import React, { useState,useEffect } from "react";
import { createContext, useContext } from "react";
import Imagem from "../../assets/image/logo-classic-red-background.png"
import { Link } from "react-router-dom"
import StyleNavBar from "./StyleNavBar.module.css"

const MyContext =  createContext();

export const ProviderContext=({children})=>{

const[ButtonMenu, setButtonMenu] = useState(false);

return(

<MyContext.Provider value={{ ButtonMenu, setButtonMenu }}>
{children}
</MyContext.Provider>

)

}

export function NavBar(){

const { ButtonMenu, setButtonMenu } = useContext(MyContext);
const [Nav,setNav] = useState(false);
const [Scroll, setScroll] = useState(0);
const [Width, setWidth] = useState(window.innerWidth);

const handleButtonClick = () => {
setButtonMenu(!ButtonMenu);
};

useEffect(()=>{

if(Scroll > 100){
setNav(true)

}else{

setNav(false)

}

const handleScroll = () => {
setScroll(window.scrollY);
};

const handleWidth = () => {
setWidth(window.innerWidth);
};

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleWidth);

console.log(Nav)
console.log("valor scroll",Scroll)
console.log("lagura da tela ",Width)
console.log("menuMobileAtivo",ButtonMenu)

return () => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleWidth);
};

},[Scroll, Nav, Width,ButtonMenu])


const Navegacao =()=>{

if(Width >= 880){

return <div id={StyleNavBar.conteinerNavBar} className={Nav ? StyleNavBar.ConteinerActived : ""}> 

<div className={StyleNavBar.ConteinerLogo}>
<div className={StyleNavBar.BoxLogo}>
<img src={Imagem} alt="Fast food Demo"/>
</div>
</div>

<nav>
<Link className={StyleNavBar.ButtonNavBar} to='/'>HOME</Link>
<Link className={StyleNavBar.ButtonNavBar} to='/Sobre'>SOBRE</Link>
<Link className={StyleNavBar.ButtonNavBar} to='/Cardapio'>CARDAPIO</Link>
<Link className={StyleNavBar.ButtonNavBar} to='/Contato'>CONTATO</Link>
</nav>

<div id={StyleNavBar.BoxIcon} className={Nav ? StyleNavBar.BoxIconActived: ""}>

<i class="bi bi-facebook"></i>
<i class="bi bi-instagram"></i>
<i class="bi bi-whatsapp"></i>

</div>
    
</div>

}else{

return <div id={StyleNavBar.conteinerNavBar} className={Nav ? StyleNavBar.ConteinerActived : ""}> 

<div className={StyleNavBar.ConteinerLogo}>

<div className={StyleNavBar.BoxLogo}>

<img src={Imagem} alt="Fast food Demo"/>
</div>

</div>

<nav>

<div className={StyleNavBar.BoxButton}>

<button className={StyleNavBar.BtnMobile} style={{color:(Nav ? "#000": "#fff")}} onClick={handleButtonClick}>

{ButtonMenu ? <i class="bi bi-x-lg"></i> : <i class="bi bi-list"></i>}

</button>

</div>

</nav>

    
</div>

}


}

return(

<>


<head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>

</head>

<header>

<Navegacao/>

</header>
</>

)

}

export function MenuMobile(){


const { ButtonMenu, setButtonMenu } = useContext(MyContext);
const [WidthMenu, setWidthMenu] = useState(window.innerWidth);

function TransicaoNav(){

(setButtonMenu(false));
 window.scrollTo(0, 0);

}

useEffect(()=>{
  
const handleWidthMenu = () => {
setWidthMenu(window.innerWidth);
};

window.addEventListener('resize', handleWidthMenu);

return () => {
  window.removeEventListener('resize', handleWidthMenu);
};

},[ WidthMenu,ButtonMenu])

const Menu = ()=>{

if(ButtonMenu && WidthMenu < 880){

return <div id={StyleNavBar.MenuMobile}>

<div id={StyleNavBar.conteinerMenuMobile}>

<div className={StyleNavBar.BoxLogo}>
<img src={Imagem} alt="Fast food Demo"/>
</div>

<nav className={StyleNavBar.ConteinerButton}>
<Link className={StyleNavBar.ButtonNavBar} onClick={TransicaoNav} to='/'>HOME</Link>
<Link className={StyleNavBar.ButtonNavBar} onClick={TransicaoNav} to='/Sobre'>SOBRE</Link>
<Link className={StyleNavBar.ButtonNavBar} onClick={TransicaoNav} to='/Cardapio'>CARDAPIO</Link>
<Link className={StyleNavBar.ButtonNavBar} onClick={TransicaoNav} to='/Contato'>CONTATO</Link>
</nav>

<div id={StyleNavBar.BoxIcon}>

<i class="bi bi-facebook"></i>
<i class="bi bi-instagram"></i>
<i class="bi bi-whatsapp"></i>

</div>

</div>

</div>


}else{

return ""

}

}

return(

<>

<head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>

</head>

<Menu/>

</>

)

}
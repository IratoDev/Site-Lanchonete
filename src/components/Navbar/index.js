
import Imagem from "../../assets/image/logo-classic-red-background.png"
import { Link } from "react-router-dom"
import StyleNavBar from "./StyleNavBar.module.css"

export function NavBar(){

return(

<header>

<div id={StyleNavBar.conteinerNavBar}> 

<div>
<img src={Imagem} alt="Fast food Demo"/>
</div>

<nav>

<Link className={StyleNavBar.ButtonNavBar} to='/'>HOME</Link>
<Link className={StyleNavBar.ButtonNavBar} to='/Sobre'>SOBRE</Link>
<Link className={StyleNavBar.ButtonNavBar} to='/Cardapio'>CARDAPIO</Link>
<Link className={StyleNavBar.ButtonNavBar} to='/Contato'>CONTATO</Link>

</nav>

    
</div>


</header>

)

}
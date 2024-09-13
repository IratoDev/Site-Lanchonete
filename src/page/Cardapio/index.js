import { NavBar } from "../../components/Navbar";
import { MenuMobile } from "../../components/Navbar";
import { FinalPage } from "../../components/FinalPage";
import { ModalLanche } from "../../components/ModalCardapio";
import { ModalSobremesa } from "../../components/ModalCardapio";
import { ModalBebidas } from "../../components/ModalCardapio";
import SectionSaudacao from "../../components/SectionSaudacao";


import Item1 from "../../assets/image/inner_burger_1-320x320.jpg";
import Item2 from "../../assets/image/inner_burger_2-640x640.jpg";
import Item3 from "../../assets/image/inner_burger_3-640x640.jpg";


import StyleCardapio from "./StyleCardaoio.module.css";

export default function CardapioPage(){

return(

<>

<head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>

</head>

<NavBar/>
<MenuMobile/>

<main>

<SectionSaudacao Titulo="Nosso cardápio" text="Quer saber como nossos pratos vão de bons a ótimos? Vamos começar nossa história sobre nossos deliciosos hambúrgueres."/>

<ModalLanche/>

<ModalSobremesa/>

<ModalBebidas/>

<section id={StyleCardapio.SectionCatalogo}>

<div className={StyleCardapio.ConteinerCatalogo}>

<div className={StyleCardapio.ConteinerTitle}>

<div id={StyleCardapio.BoxText}>
<span>SABOROSO E CROCANTE</span>
<h1>Nosso chefe recomenda</h1>
<p>Experimente as receitas do Chief, incluindo saladas, massas veganas e com baixo teor de gordura
</p>
</div>

</div>

<div className={StyleCardapio.ConteinerProduto}>

    <div className={StyleCardapio.fileiraItem}>
        <div className={StyleCardapio.ItemCatalogo}>
        
        <div className={StyleCardapio.BoxImg}>
        <img src={Item1} alt="item1"/>
        </div>

        <div className={StyleCardapio.BoxText}>
        <h2>HAMBÚRGUERES DE CARNE</h2>
        <p>Beterraba, espinafre, quiabo, castanha d'água, arroz, feijão, ervilha.</p>
        </div>

        </div>

        <div className={StyleCardapio.ItemCatalogo}>

        <div className={StyleCardapio.BoxImg}>
        <img src={Item2} alt="item2"/>
        </div>

        <div className={StyleCardapio.BoxText}>
        <h2>HAMBÚRGUERES DE CARNE</h2>
        <p>Beterraba, espinafre, quiabo, castanha d'água, arroz, feijão, ervilha.</p>
        </div>

        </div>

        <div className={StyleCardapio.ItemCatalogo}>

        <div className={StyleCardapio.BoxImg}>
        <img src={Item3} alt="item3"/>
        </div>

        <div className={StyleCardapio.BoxText}>
        <h2>HAMBÚRGUERES DE CARNE</h2>
        <p>Beterraba, espinafre, quiabo, castanha d'água, arroz, feijão, ervilha.</p>
        </div>

        </div>

    </div>


</div>


</div>

</section>

<FinalPage/>


</main>


</>

)

}

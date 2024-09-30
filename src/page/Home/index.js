import { NavBar } from "../../components/Navbar";
import { MenuMobile } from "../../components/Navbar";
import { FinalPage } from "../../components/FinalPage";
import StylePageHome from "./StyleHome.module.css";
import { Link } from "react-router-dom";
import { useState,useEffect,useRef } from "react";

import Ilustracao1 from "../../assets/image/burger_illustration_1.png";
import Ilustracao2 from "../../assets/image/burger_illustration_2.png";
import Ilustracao3 from "../../assets/image/burger_illustration_3.png";
import Ilustracao4 from "../../assets/image/burger_illustration_4.png";

import Item1 from "../../assets/image/inner_burger_1-320x320.jpg";
import Item2 from "../../assets/image/inner_burger_2-640x640.jpg";
import Item3 from "../../assets/image/inner_burger_3-640x640.jpg";
import Item4 from "../../assets/image/inner_burger_4-320x320.jpg";
import Item5 from "../../assets/image/inner_burger_5-320x320.jpg";
import Item6 from "../../assets/image/inner_burger_6-320x320.jpg";

import imgCarrosel1 from "../../assets/image/inner_burger_3-640x640.jpg";
import imgCarrosel2 from "../../assets/image/inner_burger_2-640x640.jpg";
import imgCarrosel3 from "../../assets/image/inner_burger_4-640x640.jpg";

export default function HomePage(){

const[CurrentItem, setCurrentItem] = useState(0);

const ConteinerSlide = useRef();

useEffect(()=>{

if(CurrentItem > 2){

setCurrentItem(0)

}if(CurrentItem<0){
   
setCurrentItem(2)

}

if (ConteinerSlide.current) {
    // Acessa e manipula diretamente o elemento DOM
    ConteinerSlide.current.style.transform = `translate3d(${-CurrentItem * 100}%, 0, 0)`; 
}

console.log(CurrentItem)
},[CurrentItem])

function BtnLeft(){

    setCurrentItem(CurrentItem-1);

}

function BtnRight(){

    setCurrentItem(CurrentItem+1);

}

return(

<>

<head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>

</head>

<NavBar/>

<MenuMobile/>

<main>

<section id={StylePageHome.SectionHome}>

<div className={StylePageHome.ConteinerTextHome}>

<div className={StylePageHome.BoxHome}>

<span className={StylePageHome.BoxText1}>
FAST FOOD BURGERS
</span>

<span className={StylePageHome.BoxText2}>

<h1>BEST BURGERS<br/>
IN GALAXY</h1>

</span>

<div className={StylePageHome.spaceText}>--</div>

<Link className={StylePageHome.StyleLik}>nosso menu</Link>

</div>

</div>

</section>

<section id={StylePageHome.SectionOpcoes}>

<div className={StylePageHome.ConteinerOpcoes}>

<div className={StylePageHome.OpcaoItem}>

<img src={Ilustracao1} alt="opcao1"/>

<h2>GRILL`D BURGERS</h2>

<p>Beetroot water spinach okra water chestnut ricebean pea.</p>

</div>

<div className={StylePageHome.OpcaoItem}>

<img src={Ilustracao2} alt="opcao2"/>

<h2>VEGGIE OPTIONS</h2>

<p>Water spinach arugula pea tatsoi aubergine spring onion.</p>

</div>

<div className={StylePageHome.OpcaoItem}>

<img src={Ilustracao3} alt="opcao3"/>

<h2>MILKSHAKES</h2>

<p>Dandelion zucchini burdock yarrow chickpea dandelion sorrel.</p>

</div>

<div className={StylePageHome.OpcaoItem}>

<img src={Ilustracao4} alt="opcao4"/>

<h2>DESSERTS</h2>

<p>Chickweed okra pea winter purslane coriander yarrow sweet.</p>

</div>

</div>

</section>

<section id={StylePageHome.SectionCatalogo}>

<div className={StylePageHome.ConteinerCatalogo}>

<div className={StylePageHome.ConteinerTitle}>

<span>SABOROSO E CROCANTE</span>
<h1>Escolha e aproveite</h1>
<p>Inspirado em receitas e criações dos melhores chefs do mundo</p>

</div>

<div className={StylePageHome.ConteinerProduto}>

    <div className={StylePageHome.fileiraItem}>
        <div className={StylePageHome.ItemCatalogo}>
        
        <div className={StylePageHome.BoxImg}>
        <img src={Item1} alt="item1"/>
        </div>

        <div className={StylePageHome.BoxText}>
        <h2>HAMBÚRGUERES DE CARNE</h2>
        <p> Pão de hambúrguer, carne bovina, alface, tomate, cebola, queijo cheddar, maionese, ketchup, mostarda, picles.</p>
        </div>

        </div>

        <div className={StylePageHome.ItemCatalogo}>

        <div className={StylePageHome.BoxImg}>
        <img src={Item2} alt="item2"/>
        </div>

        <div className={StylePageHome.BoxText}>
        <h2>HAMBÚRGUERES DE FRANGO</h2>
        <p> Pão de hambúrguer, filé de frango grelhado, alface, tomate, maionese, queijo, picles, molho barbecu</p>
        </div>

        </div>

        <div className={StylePageHome.ItemCatalogo}>

        <div className={StylePageHome.BoxImg}>
        <img src={Item3} alt="item3"/>
        </div>

        <div className={StylePageHome.BoxText}>
        <h2>OPÇÕES VEGANAS</h2>
        <p>Pão integral, hambúrguer de grão-de-bico, alface, tomate, cebola roxa, molho vegano, picles, abacate.</p>
        </div>

        </div>

    </div>

    <div className={StylePageHome.fileiraItem}>
        <div className={StylePageHome.ItemCatalogo}>
        
         <div className={StylePageHome.BoxImg}>
         <img src={Item4} alt="item4"/>
         </div>
         
         <div className={StylePageHome.BoxText}>
         <h2>SALADAS E WRAPS</h2>
         <p>Espinafre, rúcula, ervilha, tatsoi, berinjela, cebolinha.</p>
         </div>

        </div>

        <div className={StylePageHome.ItemCatalogo}>
   
         <div className={StylePageHome.BoxImg}>
         <img src={Item5} alt="item5"/>
         </div>

        <div className={StylePageHome.BoxText}>
         <h2>BATATA FRITA</h2>
         <p> Batatas crocantes e douradas, acompanhadas de molhos variados</p>
        </div>

        </div>

        <div className={StylePageHome.ItemCatalogo}>

         <div className={StylePageHome.BoxImg}>
         <img src={Item6} alt="item6"/>
         </div>
        
         <div className={StylePageHome.BoxText}>
         <h2>GRANDES SOBREMESAS</h2>
         <p>Uma seleção irresistível de sobremesas grandiosas, perfeitas para qualquer ocasião especial.</p>
         </div>

        </div>
    </div>


</div>

<Link className={StylePageHome.ButtonMenu}>VEJA NOSSO MENU COMPLETO</Link>

</div>

</section>

<section id={StylePageHome.SectionNovidades}>

<div className={StylePageHome.ConteinerNovidades}>

<div className={StylePageHome.FileiraNovidade}>

    <div className={`${StylePageHome.Novidades} ${StylePageHome.Novidade1}`}>

    <div className={StylePageHome.BoxTextNovidades}>

        <div className={StylePageHome.BoxText}>
            <span>Novo</span>
            <h2>HAMBÚRGUER DE FAZENDA</h2>
            <p>O nome deste hambúrguer se explica. Claro, você também pode cobri-lo com alface crocante, tomates, ketchup, molho barbecue e qualquer outra coisa.</p>
            <h2>$ 2,49</h2>
            <Link className={StylePageHome.ButtonNovidade}>ENCOMENDE AGORA</Link>
        </div>

    </div>

    </div>

    <div className={`${StylePageHome.Novidades} ${StylePageHome.Novidade5}`}>

    <div className={StylePageHome.BoxTextNovidades}>

        <div className={StylePageHome.BoxText}>
            <span>Novo</span>
            <h2>HAMBÚRGUER DE QUINOA E FEIJÃO PRETO</h2>
            <p>Não conseguimos pensar em uma maneira melhor de celebrar o verão do que com esses hambúrgueres dignos de omg. Além disso, experimente nossos cheeseburgers criativos e exagerados.</p>
            <h2>$ 3,99</h2>
            <Link className={StylePageHome.ButtonNovidade}>ENCOMENDE AGORA</Link>
        </div>
    
    </div>

    </div>
    

</div>

<div className={StylePageHome.FileiraNovidade}>

    <div className={`${StylePageHome.Novidades} ${StylePageHome.Novidade2}`}>

    <div className={StylePageHome.BoxTextNovidades}>

        <div className={StylePageHome.BoxText}>
            <span>Novo</span>
            <h2>MILKSHAKE DE CHOCOLATE</h2>
            <p>Milkshakes sempre têm um gosto bom se você é um amante de chocolate. Você pode misturar um com um creme ou experimentar todos os tipos de sabores extras.</p>
            <h2>$ 2,49</h2>
            <Link className={StylePageHome.ButtonNovidade}>ENCOMENDE AGORA</Link>
        </div>

    </div>

    </div>

    <div className={`${StylePageHome.Novidades} ${StylePageHome.Novidade4}`}>

    <div className={StylePageHome.BoxTextNovidades}>

        <div className={StylePageHome.BoxText}>
            <span>Novo</span>
            <h2>REFEIÇÃO DE HAMBURGUER PADRÃO</h2>
            <p>Esta incrível refeição de hambúrguer oferece um toque único ao hambúrguer clássico, incorporando ingredientes como queijo pimento e gergelim.</p>
            <h2>$ 4,99</h2>
            <Link className={StylePageHome.ButtonNovidade}>ENCOMENDE AGORA</Link>
        </div>

    </div>

    </div>
    

</div>

<div className={StylePageHome.FileiraNovidade}>

    <div className={`${StylePageHome.Novidades} ${StylePageHome.Novidade3}`}>

    <div className={StylePageHome.BoxTextNovidades}>

        <div className={StylePageHome.BoxText}>
            <span>Novo</span>
            <h2>CONFIRA NOSSO
            CARDÁPIO DE CATERING</h2>
            <p>Dar uma festa nunca foi tão fácil. Peça agora e deixe-nos apimentar sua festa. Refeições de hambúrguer, batatas fritas e cheeseburgers vão animar seus amigos.</p>
            <h2>US$ 13,99</h2>
            <Link className={StylePageHome.ButtonNovidade}>ENCOMENDE AGORA</Link>
        </div>
    
    </div>

    </div>

    <div className={`${StylePageHome.Novidades} ${StylePageHome.Novidade6}`}>

    <div className={StylePageHome.BoxTextNovidades}>

        <div className={StylePageHome.BoxText}>
            <span>Novo</span>
            <h2>COMO FAZER UM HAMBÚRGUER PERFEITO</h2>
            <p>Vamos contar um pequeno segredo. Misturar carne de porco e bife da melhor qualidade e servi-los em rolinhos caseiros de manteiga de ervas é a melhor versão que conhecemos.</p>
            <h2>US$ 5,99</h2>
            <Link className={StylePageHome.ButtonNovidade}>ENCOMENDE AGORA</Link>
        </div>
    
    </div>

    </div>
    

</div>

</div>

</section>

<section id={StylePageHome.Carrosel}>

<div id={StylePageHome.ConteinerCarrosel}>

<button onClick={BtnLeft} className={StylePageHome.ButtonCarroselLeft}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
</svg>
</button>

<button onClick={BtnRight} className={StylePageHome.ButtonCarroselRight}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
</svg>
</button>

<div id={StylePageHome.ConteinerSlides} ref={ConteinerSlide}>

<div className={StylePageHome.Slides}>
    <div className={StylePageHome.ConteinerSlide}>

        <div className={StylePageHome.ConteinerImgCarrosel}>
        <div className={StylePageHome.BoxImg}>
        <img src={imgCarrosel1} alt="ImagemCarrosel1"/>
        </div>
        </div>

        <div className={StylePageHome.ConteinerTextCarrosel}>

            <div className={StylePageHome.BoxtextCarrosel}>
                <span>APENAS $ 4,99</span>
                <h1>HAMBÚRGUER DE QUINOA E FEIJÃO PRETO</h1>
                <p>Não conseguimos pensar em uma maneira melhor de celebrar o verão
                do que com esses hambúrgueres de dar água na boca.
                </p>
                <Link className={StylePageHome.LinkCarrosel}>ENCOMENDE AGORA</Link>
            
            </div>

        </div>

    </div>
</div>

<div className={StylePageHome.Slides}>
    <div className={StylePageHome.ConteinerSlide}>

        <div className={StylePageHome.ConteinerImgCarrosel}>
        <div className={StylePageHome.BoxImg}>
        <img src={imgCarrosel2} alt="ImagemCarrosel1"/>
        </div>
        </div>

        <div className={StylePageHome.ConteinerTextCarrosel}>

            <div className={StylePageHome.BoxtextCarrosel}>
                <span>ÓTIMA ESCOLHA</span>
                <h1>HAMBÚRGUER DE FAZENDA</h1>
                <p>Não conseguimos pensar em uma maneira melhor de celebrar o verão do que com esses hambúrgueres de dar água na boca.
                </p>
                <Link className={StylePageHome.LinkCarrosel}>ENCOMENDE AGORA</Link>
            
            </div>

        </div>

    </div>
</div>

<div className={StylePageHome.Slides}>
    <div className={StylePageHome.ConteinerSlide}>

        <div className={StylePageHome.ConteinerImgCarrosel}>
        <div className={StylePageHome.BoxImg}>
        <img src={imgCarrosel3} alt="ImagemCarrosel1"/>
        </div>
        </div>

        <div className={StylePageHome.ConteinerTextCarrosel}>

            <div className={StylePageHome.BoxtextCarrosel}>
                <span>Novo</span>
                <h1>SALADA CÉSAR PADRÃO</h1>
                <p>Uma ótima salada Caesar ganha seu charme com um ótimo molho cuja receita usamos há décadas.
                </p>
                <Link className={StylePageHome.LinkCarrosel}>ENCOMENDE AGORA</Link>
            
            </div>

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
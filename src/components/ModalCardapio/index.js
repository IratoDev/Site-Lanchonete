import StyleModal from "../ModalCardapio/StyleModal.module.css";

import Lanche1 from "../../assets/image/menu_item_1-640x640.jpg";
import Lanche2 from "../../assets/image/menu_item_2-640x640.jpg";
import Lanche3 from "../../assets/image/menu_item_3-640x640.jpg";
import Lanche4 from "../../assets/image/menu_item_4-640x640.jpg";
import Lanche5 from "../../assets/image/menu_item_5-640x640.jpg";
import Lanche6 from "../../assets/image/menu_item_6-640x640.jpg";

import Sobrimesa1 from "../../assets/image/menu_sweet_item_1-640x640.jpg";
import Sobrimesa2 from "../../assets/image/menu_sweet_item_2-640x640.jpg";
import Sobrimesa3 from "../../assets/image/menu_sweet_item_3-640x640.jpg";
import Sobrimesa4 from "../../assets/image/menu_sweet_item_4-640x640.jpg";
import Sobrimesa5 from "../../assets/image/menu_sweet_item_5-640x640.jpg";
import Sobrimesa6 from "../../assets/image/menu_sweet_item_6-640x640.jpg";
import { useState, useEffect, useRef } from "react";


export function ModalLanche(){

return(

<>

<section className={StyleModal.ModalCardapio}>

<div className={StyleModal.ConteinerModal}>

<div className={StyleModal.ConteinerCardapio}>

    <div className={StyleModal.ConteinerTitle}>

        <div className={StyleModal.BoxTitle}>

        <span>SABOROSO E CROCANTE
        </span>
        <h1>Pratos Principais
        </h1>
        <p>Perfeito, macio, bem temperado e suculento</p>

        </div>

    </div>

    <div className={StyleModal.ConteirProdutos}>

        <div className={StyleModal.ColunProduto}>

            <Produto imagem={Lanche1} titulo="Hambúrguer de frango" texto="Tomates cereja tradicionais, azeite de oliva extravirgem de alta qualidade, mussarela de búfala" preco="$ 19,00" />

            <Produto imagem={Lanche2} titulo="Hambúrguer siciliano" texto="Azeite, cebola, suco de tomate, manjericão fresco, farinha de rosca, queijo parmesão, ovo" preco="$ 19,00" />

            <Produto imagem={Lanche3} titulo="Hambúrguer de carne bovina" texto="Cebola, carne moída de boa qualidade, ovo, óleo vegetal, pão de hambúrguer, pimenta-do-reino, sal" preco="$ 14,00" />

        </div>

        <div className={StyleModal.ColunProduto}>

            <Produto imagem={Lanche4} titulo="Bife apimentado" texto="Batatas, óleo vegetal, cebola amarela, alho, cominho moído, pimenta caiena, raiz de gengibre fresco" preco="$ 17,00" />

            <Produto imagem={Lanche5} titulo="Bacon grelhado" texto="Filés de salmão, limão, pimenta, alho em pó, molho de soja, açúcar mascavo, óleo vegetal, pimenta" preco="$ 12,00" />

            <Produto imagem={Lanche6} titulo="Hambúrguer vegano" texto="Pepinos, vinagre de cidra ou branco, água, açúcar, sal, pimentão verde, salsa fresca, queijo feta" preco="$ 16,00" />

        </div>

    </div>

</div>

</div>

</section>

</>
    
)

}

export function ModalSobremesa(){

return(

<>

<section className={StyleModal.ModalSobremesa}>

<div className={StyleModal.ConteinerModal}>

<div className={StyleModal.ConteinerCardapio}>

    <div className={StyleModal.ConteinerTitle}>

        <div className={StyleModal.BoxTitleSobremesa}>

        <span>SABOROSO E CROCANTE
        </span>
        <h1>Doces e Sobremesas</h1>

        <p>Deixe-nos preparar para você nosso doce especial</p>

        </div>

    </div>

    <div className={StyleModal.ConteirProdutos}>

        <div className={StyleModal.ColunProduto}>

            <Produto imagem={Sobrimesa1} titulo="Cheesecakes de chocolate" texto="Biscoitos de chocolate wafer, cream cheese com menos gordura, açúcar, baunilha, ovo, cobertura de calda de chocolate quente" preco="$ 39,00" />

            <Produto imagem={Sobrimesa2} titulo="Bolo Tres Leches" texto="Mistura para bolo amarelo, óleo de canola, baunilha, ovos, leite condensado adoçado sem gordura, morangos frescos" preco="$ 19,00" />

            <Produto imagem={Sobrimesa3} titulo="Pudim de banana" texto="Mistura para pudim e recheio de torta de baunilha francesa, iogurte original, baunilha francesa, cobertura, biscoitos" preco="$ 24,00" />

        </div>

        <div className={StyleModal.ColunProduto}>

            <Produto imagem={Sobrimesa4} titulo="Bolo de amêndoa" texto="Açúcar granulado, amêndoas picadas, cacau em pó, leite desnatado, óleo de canola, baunilha, açúcar mascavo" preco="$ 17,00" />

            <Produto imagem={Sobrimesa5} titulo="Bolo de cenoura" texto="Óleo de canola, abóbora enlatada, leite, baunilha, açúcar granulado, canela, cenoura ralada" preco="$ 32,00" />

            <Produto imagem={Sobrimesa6} titulo="Brownies" texto="Iogurte original Baunilha francesa, açúcar, canola, baunilha, ovo sem gordura, cacau em pó, açúcar de confeiteiro" preco="$ 26,00" />

        </div>

    </div>

</div>

</div>

</section>

</>
    
)

}

export function ModalBebidas(){

const [Focus, setFocus]=useState("Slide1");

const[CurrentItem, setCurrentItem] = useState(0);

const ConteinerSlide = useRef();

const btn1 = useRef();
const btn2 = useRef();
const btn3 = useRef();

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


},[CurrentItem])

const handleClick = (slide) => {
setFocus(slide); 
};


return(

<>

<section className={StyleModal.ModalBebidas}>

<div className={StyleModal.ConteinerModal}>

<div className={StyleModal.ConteinerCardapio}>

    <div className={StyleModal.ConteinerTitle}>

        <div className={StyleModal.BoxTitle}>

        <span>SABOROSO E CROCANTE
        </span>
        <h1>Bebidas e Milkshakes</h1>

        <p>Receitas de aperitivos e coquetéis saborosos e saudáveis</p>

        </div>

    </div>

    <div id={StyleModal.NavBarBebidas}>

            <span useRef={btn1} onClick={() => { handleClick('Slide1'); setCurrentItem(0)}}
        className={Focus === 'Slide1' ? StyleModal.focused : ''}>Refrigerantes</span>
            <span useRef={btn2} onClick={() => { handleClick('Slide2'); setCurrentItem(1) }}
        className={Focus === 'Slide2' ? StyleModal.focused : ''}>Smoothies</span>
            <span useRef={btn3} onClick={() => { handleClick('Slide3'); setCurrentItem(2)}}
        className={Focus === 'Slide3' ? StyleModal.focused : ''}>Batidos</span>

    </div>

    <div className={StyleModal.ConteirProdutos}>

    <div id={StyleModal.conteinerSlides} ref={ConteinerSlide}>

        <div className={StyleModal.Slides}>

        <div className={StyleModal.ColunProduto}>

            <Bebidas imagem={Sobrimesa1} titulo="Rum e coca" texto="Rum temperado, cola e limão, Coca-Cola com cereja, Coca-Cola com gás, Bebidas energéticas, Fatia de limão" preco="$ 17,00" />

            <Bebidas imagem={Sobrimesa2} titulo="Chá" texto="Chá verde, Chá de flores, Chá oolong, Chá premium ou delicado, Chá árabe, Chá preto com leite, Chá de maçã, Chá de iogurte" preco="$ 12,00" />

            <Bebidas imagem={Sobrimesa3} titulo="Socó" texto="Álcool ou não álcool, açúcar, limão, água e chá ou especiarias, suco de fruta, açúcar ou xarope de milho" preco="$ 16,00" />

        </div>

        <div className={StyleModal.ColunProduto}>

            <Bebidas imagem={Sobrimesa4} titulo="Suco de frutas" texto="Maçã, Laranja, Tomate, Damasco, Groselha preta, Mirtilo, Pimenta, Cranberry, Berinjela" preco="$ 19,00" />

            <Bebidas imagem={Sobrimesa5} titulo="Refrigerante" texto="Bebidas carbonatadas, Light, Mineral, Classic, Refrigerante de limão, Refrigerante de laranja, Refrigerante de xarope, Refrigerante de maçã" preco="$ 19,00" />

            <Bebidas imagem={Sobrimesa6} titulo="Iogurte de frutas" texto="IEspinafre, couve, acelga, couve, aipo, salsa ou brócolis, banana, iogurte e mel" preco="$ 24,00" />

        </div>

        </div>

        <div className={StyleModal.Slides}>

<div className={StyleModal.ColunProduto}>

    <Bebidas imagem={Sobrimesa1} titulo="Café de baunilha" texto="Triple sec, baunilha e suco de limão ou lima, geralmente servido com sal ou açúcar na borda do copo, perfeito para o verão" preco="$ 19,00" />

    <Bebidas imagem={Sobrimesa2} titulo="Mocha de framboesa" texto="Tradicionalmente, um mojito é um coquetel que consiste em cinco ingredientes: rum branco, açúcar, suco de limão, água com gás e hortelã." preco="$ 19,00" />

    <Bebidas imagem={Sobrimesa3} titulo="Morango banana" texto="Feito com uísque, vermute doce e bitters – uísque canadense, bourbon, uísque misturado e uísque do Tennessee." preco="$ 24,00" />

</div>

<div className={StyleModal.ColunProduto}>

    <Bebidas imagem={Sobrimesa4} titulo="Proteína de chocolate" texto="Ou informalmente um cosmo, é um coquetel feito com vodca, triple sec, suco de cranberry e suco de limão espremido na hora ou adoçado." preco="$ 17,00" />

    <Bebidas imagem={Sobrimesa5} titulo="Morango gladiador" texto="Coquetel doce feito com rum, creme de coco ou leite de coco e suco de abacaxi, geralmente servido misturado ou batido" preco="$ 32,00" />

    <Bebidas imagem={Sobrimesa6} titulo="Chocolate vegano" texto="Chocolate, suco de tomate e combinações de outras especiarias e aromas, incluindo molho inglês" preco="$ 26,00" />

</div>

        </div>

        <div className={StyleModal.Slides}>

        <div className={StyleModal.ColunProduto}>

            <Bebidas imagem={Sobrimesa1} titulo="Chocolate" texto="Riesling é uma variedade de uva aromática que apresenta aromas florais, quase perfumados, bem como elevada acidez" preco="$ 17,00" />

            <Bebidas imagem={Sobrimesa2} titulo="Cereja batida" texto="É vinificado em muitos estilos diferentes, desde os vinhos magros e intensamente minerais de Chablis, França, até os vinhos do Novo Mundo com sabores frutados." preco="$ 12,00" />

            <Bebidas imagem={Sobrimesa3} titulo="Morango banana" texto="Vinho de cor predominantemente clara, com aromas de frutos vermelhos como cerejas, framboesas, morangos e maçã." preco="$ 26,00" />

        </div>

        <div className={StyleModal.ColunProduto}>

            <Bebidas imagem={Sobrimesa4} titulo="Chá de Oregon" texto="Complemento delicioso para os sabores frescos de frutos do mar, crustáceos e peixes brancos. Aumenta o efeito" preco="$ 19,00" />

            <Bebidas imagem={Sobrimesa5} titulo="Brisa tropical" texto="A variedade de uva de vinho tinto mais famosa. As características gerais são escuras, tânicas, vegetais" preco="$ 19,00" />

            <Bebidas imagem={Sobrimesa6} titulo="Manteiga de amendoim" texto="Merlot tem níveis moderados de álcool com sabores frescos de frutas vermelhas (framboesas, morangos e potencialmente folhas" preco="$ 24,00" />

        </div>

        </div>

    </div>

    </div>

</div>

</div>

</section>

</>

)

}

function Produto({imagem,titulo,texto,preco}){

return(

<div className={StyleModal.Produto}>

<div className={StyleModal.BoxImg}> <img src={imagem} alt="Lanche1" /> </div>
<div className={StyleModal.BoxText}> <h4>{titulo}</h4> <p>{texto}</p> </div>
<div className={StyleModal.BoxPreco}> <span>{preco}</span> </div>

</div>

)

}

function Bebidas({titulo,texto,preco}){

return(

<div className={StyleModal.Produto}>

<div className={StyleModal.BoxText}> <h4>{titulo}</h4> <p>{texto}</p> </div>
<div className={StyleModal.BoxPreco}> <span>{preco}</span> </div>

</div>

)

}

import { NavBar } from "../../components/Navbar";
import { MenuMobile } from "../../components/Navbar";
import { FinalPage } from "../../components/FinalPage";
import SectionSaudacao from "../../components/SectionSaudacao";
import StyleSobre from "./StyleSobre.module.css";

import imagem1 from "../../assets/image/inner_history_2.jpg";
import imagem2 from "../../assets/image/inner_1-640x640.jpg";
import imagem3 from "../../assets/image/inner_2-640x640.jpg";
import imagem4 from "../../assets/image/inner_3-640x640.jpg";

import imagemChef from "../../assets/image/team_transparent_1.png"

export default function SobrePage(){

return(

<>

<head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>

</head>

<NavBar/>

<MenuMobile/>

<main>

<SectionSaudacao Titulo="Sobre nós" text="Capitalize em frutos fáceis para identificar uma atividade de valor agregado de estádio para teste de desempenho beta. Supere a exclusão digital.
"/>

<section id={StyleSobre.Historia}>

<div id={StyleSobre.ConteinerHistoria}>

<div className={StyleSobre.BoxHistoria}>

    <div id={StyleSobre.SectionText}>

        
            <div className={StyleSobre.BoxText}>

                <span>SAIBA MAIS</span>
                <h1>Nosso Começo</h1>

                <p>
                Capitalize em frutos fáceis para identificar uma atividade de valor agregado de estádio para teste beta. Supere a exclusão digital com cliques adicionais do DevOps. A imersão em nanotecnologia ao longo da rodovia da informação fechará o ciclo de focar somente no resultado final.
                </p>

            </div>
        
              

    </div>
    
    <div id={StyleSobre.SectionImagem}>

        <div className={StyleSobre.ConteinerImagem}>

            <div className={StyleSobre.BoxImagem}>

                <img src={imagem1} alt="imagem historia"/>

            </div>

        </div>

    </div>

</div>

</div>

</section>

<section id={StyleSobre.Qualidades}>

<div id={StyleSobre.ConteinerQualidades}>

    <div className={StyleSobre.BoxQualidades}>

        

            <div className={StyleSobre.ElementQualidade}>
            <span className={StyleSobre.BoxIcon}><i class="bi bi-cloud-fog-fill"></i></span>
            
            <div className={StyleSobre.BoxText}>
            <h2>Nós servimos paixão</h2>
            <p>Traga à mesa estratégias de sobrevivência vantajosas para garantir o domínio proativo.
            </p>
            </div>

            </div>

            <div className={StyleSobre.ElementQualidade}>
            <span className={StyleSobre.BoxIcon}><i class="bi bi-fire"></i></span>
            
            <div className={StyleSobre.BoxText}>
            <h2>Espere o melhor</h2>
            <p>Aproveite oportunidades mais fáceis para identificar um estádio de beisebol premium</p>
            </div>

            </div>

            <div className={StyleSobre.ElementQualidade}>
            <span className={StyleSobre.BoxIcon}><i class="bi bi-cake2"></i></span>
            
            <div className={StyleSobre.BoxText}>
            <h2>Nós vendemos sabores</h2>
            <p>Ligue para nós gratuitamente em
            (+1) 800 456324 ou (+1) 555 456325</p>
            </div>

            </div>

        

    </div>

</div>

</section>

<section id={StyleSobre.Diferenciais}>

<div id={StyleSobre.ConteinerDiferenciais}>

<div id={StyleSobre.BoxDiferenciais}>

    <div className={StyleSobre.Diferencial}>    

            <div className={StyleSobre.BoxDiferencial}>

                <div className={StyleSobre.ConteinerText}>

                <div className={StyleSobre.BoxText}>
                <span>INOVADOR</span>
                <h1>Design de restaurante</h1>
                <p>Capitalize em frutos fáceis para identificar uma atividade de valor agregado de estádio para teste beta. Supere a exclusão digital com cliques adicionais do DevOps.</p>
                </div>


                </div>

                <div className={StyleSobre.ConteinerImagem}>

                    <div className={StyleSobre.BoxImagem}>

                        <img src={imagem2} alt="img1"/>

                    </div>

                </div>

            </div>

    </div>

    <div className={StyleSobre.Diferencial}>

            <div className={StyleSobre.BoxDiferencial}>

                <div className={StyleSobre.ConteinerText}>

                <div className={StyleSobre.BoxText}>
                <span>NOVA LOCALIZAÇÃO</span>
                <h1>Espere o melhor</h1>
                <p>Capitalize em frutos fáceis para identificar uma atividade de valor agregado de estádio para teste beta. Supere a exclusão digital com cliques adicionais do DevOps.</p>
                </div>

                </div>

                <div className={StyleSobre.ConteinerImagem}>

                    <div className={StyleSobre.BoxImagem}>

                        <img src={imagem3} alt="img1"/>

                    </div>

                </div>

            </div>

    </div>

    <div className={StyleSobre.Diferencial}>

            <div className={StyleSobre.BoxDiferencial}>

                <div className={StyleSobre.ConteinerText}>

                <div className={StyleSobre.BoxText}>
                <span>FRESCO E SABOROSO</span>
                <h1>Mudando a cara do fast food</h1>
                <p>Capitalize em frutos fáceis para identificar uma atividade de valor agregado de estádio para teste beta. Supere a exclusão digital com cliques adicionais do DevOps.</p>
                </div>

                </div>

                <div className={StyleSobre.ConteinerImagem}>

                    <div className={StyleSobre.BoxImagem}>

                        <img src={imagem4} alt="img1"/>

                    </div>

                </div>

            </div>

    </div>


</div>

</div>

</section>

<section id={StyleSobre.Chef}>

<div id={StyleSobre.ConteinerChef}>

<div id={StyleSobre.BoxChef}>

    <div className={StyleSobre.ConteinerText}>

        <div className={StyleSobre.BoxText}>

        <span>NOSSO CHEF</span>
        <h1>Conheça o Chef</h1>
        <p>Folhas de nabo, mil-folhas, feijão-de-rice, rutabaga, escarola, couve-flor, alface-do-mar, couve-rábano, amaranto, espinafre aquático, abacate, daikon, repolho chinês, aspargos, beldroegas de inverno, couve. Aipo, batata, cebolinha, passas do deserto, raiz-forte, espinafre, cenoura, soko. Raiz de lótus, espinafre aquático, erva-doce, kombu, milho, broto de bambu.</p>

        <p style={{fontWeight:"bold", opacity:"1"}}>Folhas de nabo, mil-folhas, feijão-de-rice, rutabaga, escarola, couve-flor, alface-do-mar, couve-rábano, amaranto, espinafre aquático, abacate, daikon, repolho chinês, aspargos, beldroegas de inverno, couve. Aipo, batata, cebolinha, passas do deserto, raiz-forte, espinafre, cenoura, soko. Raiz de lótus, espinafre aquático, erva-doce, kombu, milho, broto de bambu.</p>
        </div>

       

    </div>

    <div className={StyleSobre.ConteinerImagem}>

        <div className={StyleSobre.BoxImagem}>

        <img src={imagemChef} alt="chef"/>

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
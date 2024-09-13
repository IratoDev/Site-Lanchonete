
import { NavBar } from "../../components/Navbar";
import { MenuMobile } from "../../components/Navbar";
import { FinalPage } from "../../components/FinalPage";
import SectionSaudacao from "../../components/SectionSaudacao";

import imagem from "../../assets/image/team_transparent_1.png"

import StyleContato from "./StyleContato.module.css"

export default function ContatoPage(){

return(

<>

<head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>

</head>

<NavBar/>
<MenuMobile/>

<main>

<SectionSaudacao Titulo="Contato" text="Capitalize em frutos fáceis para identificar uma atividade de valor agregado de estádio para teste de desempenho beta. Supere a exclusão digital"/>

<section id={StyleContato.Contato}>

    <div id={StyleContato.ConteinerContato}>

    <div id={StyleContato.ConteinerFormulario}>

        <div className={StyleContato.ConteinerText}>

        <div className={StyleContato.BoxText}>

            <span>CONTATE-NOS</span>
            <h1>Faça uma reserva online</h1>
            <p>Supere a exclusão digital. Capitalize em frutos fáceis para identificar uma atividade de valor agregado de estádio para teste beta.</p>

        </div>

        </div>

        <div className={StyleContato.BoxFormulario}>

            <form>

            <label>
            <legend>Seu nome (obrigatorio)</legend>

                <input type="Text"/>

            </label>

            <label>
            <legend>Seu e-mail (obrigatorio)</legend>

                <input type="Text"/>

            </label>

            <label>
            <legend>Assunto</legend>

                <input type="Text"/>

            </label>

            <label>
            <legend>Escolha o serviço</legend>

              <select>

                <option>-Por favor, escolha uma opção-</option>
                <option>Casamento</option>
                <option>Eventos corporativo</option>
                <option>Festa de aniversario</option>
                <option>Reunião de classe</option>

              </select>

            </label>

            <label>
            <legend>Sua mensagem</legend>

                <textarea cols="40" rows="10" maxlength="2000" placeholder="Digite sua mensagem..."/>

            </label>

            <label>

                <button>Enviar</button>

            </label>

            </form>

        </div>


    </div>
    
    <div id={StyleContato.ConteinerAction}>

        <article>

            <div className={StyleContato.ConteinerImage}>

            <img src={imagem} alt="imagem Cozinheiro"/>

            </div>

            <div className={StyleContato.ConteinerInfo}>

                <div className={StyleContato.BoxText}>

                    <span>Nova Iorque</span>
                    <h3>Comida rápida</h3>

                    <p>seg-qui: 11.00 – 23.00 </p>
                    <p>sáb-dom: 12.00 – 21.00PM</p>

                </div>

                <div className={StyleContato.BoxText}>

                   <div className={StyleContato.TextInfo}><p>+ 1 555 2367890</p></div>
                   <div className={StyleContato.TextInfo}><p>info@bold-themes.com</p></div>
                   <div className={StyleContato.TextInfo}><p>65th Street, Nova York</p></div>

                </div>

            </div>

        </article>

    </div>


    </div>

</section>

<FinalPage/>

</main>

</>

)

}
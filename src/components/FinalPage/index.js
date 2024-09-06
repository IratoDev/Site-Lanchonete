import { Link } from "react-router-dom";
import StyleFinalPage from "../FinalPage/StyleFinalPage.module.css";

export function FinalPage(){

return(

<>

<section id={StyleFinalPage.SectionEndereco}>

<div className={StyleFinalPage.conteinerEndereco}>

<div className={StyleFinalPage.BoxEndereco}>

<div className={StyleFinalPage.BoxTextEndereco}>

<span>LIGUE PARA NÓS</span>
<h1>+1-202-555-016</h1>

        <div className={StyleFinalPage.ElementosEndereco}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
        </svg>

        <div className={StyleFinalPage.SubTitle}>
        <p>seg-qui: 11.00 – 23.00</p>
        <p>sáb: 12.00 – 23.00</p>
        <p>dom: 12.00 – 21.00</p>
        </div>

        </div>

        <div className={StyleFinalPage.ElementosEndereco}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>

        <div className={StyleFinalPage.SubTitle}>
        <p>seg-qui: 11.00 – 23.00</p>
        <p>sáb: 12.00 – 23.00</p>
        <p>dom: 12.00 – 21.00</p>
        </div>

        </div>

<span>

</span>

</div>

</div>

<div className={StyleFinalPage.BoxEndereco}>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1549.601786662573!2d-42.78928096174215!3d-5.167348327391361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e340a4c3cd935%3A0x19ca19f9afebd302!2sR.%20Ver.%20Miguel%20Silva%20-%20Angelim%2C%20Teresina%20-%20PI%2C%2064034-524!5e1!3m2!1spt-BR!2sbr!4v1723584651753!5m2!1spt-BR!2sbr" title="Localização" width="600" height="500" style={{border:'none'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>

</div>

</section>

<div id={StyleFinalPage.DownloadCardapio}>

<div className={StyleFinalPage.ConteinerDownload}>
<h1>BAIXE NOSSO CARDÁPIO</h1>
</div>

<div className={StyleFinalPage.ConteinerDownload}>
<Link className={StyleFinalPage.CardapioLink}>Download</Link>
</div>

</div>

<footer>

<div id={StyleFinalPage.FooterDireitos}>

<p>
Copyright © 2024 IratoDev.com Todos os direitos reservados.   
</p>

<div className={StyleFinalPage.ConteinerFooter}>

<Link className={StyleFinalPage.LinkFooter}>Home</Link> 
<Link className={StyleFinalPage.LinkFooter}>cardapio</Link>
<Link className={StyleFinalPage.LinkFooter}>Sobre</Link>  
<Link className={StyleFinalPage.LinkFooter}>contato</Link> 

</div>

</div>

</footer>

</>

)

}
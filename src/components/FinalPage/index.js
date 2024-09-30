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
        
        <div className={StyleFinalPage.BoxIcon}>
        <i class="bi bi-clock"></i>
        </div>

        <div className={StyleFinalPage.SubTitle}>
        <p>seg-qui: 11.00 – 23.00</p>
        <p>sáb: 12.00 – 23.00</p>
        <p>dom: 12.00 – 21.00</p>
        </div>

        </div>

        <div className={StyleFinalPage.ElementosEndereco}>
        <div className={StyleFinalPage.BoxIcon}>
        <i class="bi bi-geo-alt-fill"></i>
        </div>

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

<Link className={StyleFinalPage.CardapioLink}>Download</Link>
</div>

</div>

<footer>

<div id={StyleFinalPage.FooterDireitos}>

<div className={StyleFinalPage.ConteinerFooter}>

<Link className={StyleFinalPage.LinkFooter}>Home</Link> 
<Link className={StyleFinalPage.LinkFooter}>cardapio</Link>
<Link className={StyleFinalPage.LinkFooter}>Sobre</Link>  
<Link className={StyleFinalPage.LinkFooter}>contato</Link> 

</div>

<p>
Copyright © 2024 IratoDev.com Todos os direitos reservados.   
</p>

</div>

</footer>

</>

)

}
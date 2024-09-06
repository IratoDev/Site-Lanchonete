
import StyleSaudacao from "./StyleSaudacao.module.css"

export default function SectionSaudacao({Titulo,text}){

return(

<>

<section id={StyleSaudacao.Saudacao}>

<div id={StyleSaudacao.ConteinerSaudacao}>

<div className={StyleSaudacao.ConteinerTextSaudacao}>

<div className={StyleSaudacao.BoxText}>

<h1>{Titulo}</h1>

<p>
{text}
</p>

</div>

</div>

</div>

</section>

</>

)

}
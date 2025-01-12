import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ProviderContext } from "./components/Navbar";
import HomePage from "./page/Home";
import CardapioPage from "./page/Cardapio";
import SobrePage from "./page/Sobre";
import ContatoPage from "./page/Contato";

export default function AppRouter(){

return(

<BrowserRouter>

<ProviderContext>
<Routes>

<Route path="/" element={<HomePage/>} />
<Route path="/Cardapio" element={<CardapioPage/>} />
<Route path="/Sobre" element={<SobrePage/>} />
<Route path="/Contato" element={<ContatoPage/>} />


</Routes>
</ProviderContext>

</BrowserRouter>

)
}
import Copyright from "./Copyright";
import Links from "./Links";
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar() {
    const usuarios = [{
        src:"assets/img/catanacomics.svg",
        nome:"catanacomics",
        apelido:"Catana"
    }];
    return (
        <div class="sidebar">
            {usuarios.map((usuario) => <Usuario src={usuario.src} nome={usuario.nome} apelido={usuario.apelido}/>)}
            <Sugestoes />
            
            <Links />
            <Copyright />
        </div>
    );
}
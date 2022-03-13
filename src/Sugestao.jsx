import Perfil from "./Perfil";

export default function Sugestao(props) {
    return (
    <div class="sugestao">
        <Perfil src={props.src} nome={props.nome} razao={props.razao}/>

        <div class="seguir">Seguir</div>
    </div>
    );
}
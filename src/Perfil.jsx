export default function Perfil(props) {
    return (
    <div class="usuario">
        <img src={props.src} />
        <div class="texto">
            <div class="nome">{props.nome}</div>
            <div class="razao">{props.razao}</div>
        </div>
    </div>
    );
}
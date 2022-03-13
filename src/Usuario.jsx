export default function Usuario(props) {
    return (
    <div class="usuario">
        <img src={props.src} />
        <div class="texto">
            <strong>{props.nome}</strong>
            {props.apelido}
        </div>
    </div>
    );
}
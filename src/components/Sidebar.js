function UserSidebar(props) {
    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.name}
            </div>
        </div>
    )
}
function Sugestoes() {
    const usuarios = [
        {
            img: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes",
            reason: "Segue você"
        },
        {
            img: "assets/img/chibirdart.svg",
            name: "chibirdart",
            reason: "Segue você"
        },
        {
            img: "assets/img/razoesparaacreditar.svg",
            name: "razoesparaacreditar",
            reason: "Novo no Instagram"
        },
        {
            img: "assets/img/adorable_animals.svg",
            name: "adorable_animals",
            reason: "Segue você"
        },
        {
            img: "assets/img/smallcutecats.svg",
            name: "smallcutecats",
            reason: "Segue você"
        }
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {usuarios.map(user => (
                <div class="sugestao">
                    <div class="usuario">
                        <img src={user.img} />
                        <div class="texto">
                            <div class="nome">{user.name}</div>
                            <div class="razao">{user.reason}</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>
            ))}
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>



    )
}
function Sidebar() {
    return (
        <div class="sidebar">
            <UserSidebar img="assets/img/catanacomics.svg"
                user="catanacomics"
                name="Catana" />
            <Sugestoes />
        </div>
    )
}


export default Sidebar
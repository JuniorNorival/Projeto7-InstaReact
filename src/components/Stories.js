function CaixaStories (props){
    return (
        
        <div class="caixa-stories">
            <div>
                <img class="circulo" src={"./imagens/stories_background 5.svg"} alt="" />
                <p>{props.title}</p>
            </div>
            <div class="imagem-stories"><img src={props.img} alt= "" /></div>
         </div>
    )
}

function Stories (){

    return (
        <div class="stories">
            <CaixaStories title="9gag" img = "https://ovicio.com.br/wp-content/uploads/2021/12/20211221-ovicio-naruto-1249229-1280x0-1-1024x536.jpeg" />
            <CaixaStories title="9gag" img = "https://ovicio.com.br/wp-content/uploads/2021/12/20211221-ovicio-naruto-1249229-1280x0-1-1024x536.jpeg" />
            <CaixaStories title="9gag" img = "https://ovicio.com.br/wp-content/uploads/2021/12/20211221-ovicio-naruto-1249229-1280x0-1-1024x536.jpeg" />
            <CaixaStories title="9gag" img = "https://ovicio.com.br/wp-content/uploads/2021/12/20211221-ovicio-naruto-1249229-1280x0-1-1024x536.jpeg" />
            <CaixaStories title="9gag" img = "https://ovicio.com.br/wp-content/uploads/2021/12/20211221-ovicio-naruto-1249229-1280x0-1-1024x536.jpeg" />
            <CaixaStories title="9gag" img = "https://ovicio.com.br/wp-content/uploads/2021/12/20211221-ovicio-naruto-1249229-1280x0-1-1024x536.jpeg" />
            <CaixaStories title="9gag" img = "https://ovicio.com.br/wp-content/uploads/2021/12/20211221-ovicio-naruto-1249229-1280x0-1-1024x536.jpeg" />
            <CaixaStories title="9gag" img = "https://ovicio.com.br/wp-content/uploads/2021/12/20211221-ovicio-naruto-1249229-1280x0-1-1024x536.jpeg" />
            <CaixaStories title="9gag" img = "https://ovicio.com.br/wp-content/uploads/2021/12/20211221-ovicio-naruto-1249229-1280x0-1-1024x536.jpeg" />
            <CaixaStories title="9gag" img = "https://ovicio.com.br/wp-content/uploads/2021/12/20211221-ovicio-naruto-1249229-1280x0-1-1024x536.jpeg" />
        </div>
    )
}
export default Stories
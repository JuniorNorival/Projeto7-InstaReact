import React from 'react'

function Post() {
    const [name, setName] = React.useState("heart-outline")
    const postImg = [
        {
            post: "assets/img/gato-telefone.svg",
            video: "",
            userimg: "assets/img/meowed.svg",
            user: "meowed",
            option: <ion-icon name='ellipsis- horizontal'></ion-icon>,
            action:
                <div>
                    <ion-icon name={name} onClick={() => {
                        setName("heart")
                    }}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>,
            action1: <ion-icon name="bookmark-outline"></ion-icon>,
            likeImg: "assets/img/respondeai.svg",
            likeText: <p>Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></p>
        },
        {
            post: "assets/img/dog.svg",
            video: "",
            userimg: "assets/img/barked.svg",
            user: "barked",
            option: <ion-icon name='ellipsis- horizontal'></ion-icon>,
            action:
                <div>
                    <ion-icon name={name} onClick={() => {
                        setName("heart")
                    }}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>,
            action1: <ion-icon name="bookmark-outline"></ion-icon>,
            likeImg: "assets/img/respondeai.svg",
            likeText: <p>Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></p>
        },
        {
            post: "",
            video: <video controls="controls" autoplay muted loop><source src="./imagens/video.mp4" type="video/mp4" /><source src="./imagens/video.ogv" type="video/ogv" /></video>,
            userimg: "assets/img/barked.svg",
            user: "barked",
            option: <ion-icon name='ellipsis- horizontal'></ion-icon>,
            action:
                <div>
                    <ion-icon name={name} onClick={() => {
                        setName("heart")
                    }}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>,
            action1: <ion-icon name="bookmark-outline"></ion-icon>,
            likeImg: "assets/img/respondeai.svg",
            likeText: <p>Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></p>
        }
    ]

    

    return (
        <div class="posts">
            {postImg.map((post) => (
                <div class="post" >
                    <div class="topo">
                        <div class="usuario">
                            <img src={post.userimg} />
                            {post.user}
                        </div>
                        <div class="acoes">
                            {post.option}
                        </div>
                    </div>
                    <div class="conteudo"
                    >
                        {post.video}
                        <img onClick={() => {
                            setName ('heart') 
                        }} src={post.post} />
                    </div>
                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                {post.action}
                            </div>
                            <div>
                                {post.action1}
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={post.likeImg} />
                            <div class="texto">
                                {post.likeText}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )

}




export default Post
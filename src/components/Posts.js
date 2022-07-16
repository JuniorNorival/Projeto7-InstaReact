import React from 'react'
function Post(props) {
    const [name, setName] = React.useState("heart-outline");
    return (
        <div class="post" >
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUser} />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name='ellipsis- horizontal'></ion-icon>
                </div>
            </div>
            <div class="conteudo">

                <img
                    onClick={() => {

                        setName("heart")
                    }} src={props.img} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={name} onClick={() => {
                            if (name === "heart") {
                                setName("heart-outline")

                            } else {
                                setName("heart")

                            }
                        }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeImg} />
                    <div class="texto">
                        Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.qtdLike} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Posts() {
    const postArray = [
        {
            img: "assets/img/gato-telefone.svg",
            video: "",
            imgUser: "assets/img/meowed.svg",
            user: "meowed",
            likeImg: "assets/img/respondeai.svg",
            userLike: "respondeai",
            qtdLike: "98.999"
        },
        {
            img: "assets/img/dog.svg",
            video: "",
            imgUser: "assets/img/barked.svg",
            user: "barked",
            likeImg: "assets/img/respondeai.svg",
            userLike: "respondeai",
            qtdLike: "98.999",
        },
        {
            img: "assets/img/eso2105a.webp",
            imgUser: "assets/img/download.png",
            user: "nasa",
            likeImg: "assets/img/respondeai.svg",
            userLike: "respondeai",
            qtdLike: "98.999",
        }
    ]
    return (
        postArray.map(post => (
            <div class='Posts'>
                <Post
                    img={post.img}
                    video={post.video}
                    imgUser={post.imgUser}
                    user={post.user}
                    likeImg={post.likeImg}
                    userLike={post.userLike}
                    qtdLike={post.qtdLike} />
            </div>
        ))
       
    )

}




export default Posts
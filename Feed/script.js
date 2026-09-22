const posts = [

    {
        id: 1,

        user: "Gabriel Costa",

        username: "@gabriel",

        avatar: "G",

        content:
            "Fim de semana perfeito! Aproveitando o dia com os amigos e curtindo esse pôr do sol.",

        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",

        likes: 124,

        comments: [

            {
                user: "Ana Paula",
                avatar: "A",
                text: "Que lugar incrível!"
            },

            {
                user: "Lucas Silva",
                avatar: "L",
                text: "Ficou muito bonita essa foto."
            },

            {
                user: "Mariana Alves",
                avatar: "M",
                text: "Preciso conhecer esse lugar!"
            }

        ]

    },


    {
        id: 2,

        user: "Ana Paula",

        username: "@anapaula",

        avatar: "A",

        content:
            "Hoje foi dia de sair para conhecer um lugar novo. Experiência incrível!",

        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",

        likes: 89,

        comments: [

            {
                user: "Gabriel Costa",
                avatar: "G",
                text: "Muito bonito!"
            },

            {
                user: "Lucas Silva",
                avatar: "L",
                text: "Gostei bastante."
            }

        ]

    },


    {
        id: 3,

        user: "Lucas Silva",

        username: "@lucas",

        avatar: "L",

        content:
            "Finalmente terminei meu projeto! Agora é hora de descansar.",

        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",

        likes: 57,

        comments: [

            {
                user: "Victor Oliveira",
                avatar: "V",
                text: "Parabéns pelo projeto!"
            }

        ]

    }

];



/* =========================
   ELEMENTOS
========================= */

const postsContainer =
    document.getElementById("postsContainer");

const feedPage =
    document.getElementById("feedPage");

const postPage =
    document.getElementById("postPage");

const fullPostContainer =
    document.getElementById("fullPostContainer");

const backButton =
    document.getElementById("backButton");

const otherPage =
    document.getElementById("otherPage");

const returnFeedButton =
    document.getElementById("returnFeedButton");

const menuItems =
    document.querySelectorAll(".menu-item");



/* =========================
   MOSTRAR POSTS
========================= */

function renderPosts() {

    postsContainer.innerHTML = "";

    posts.forEach(post => {

        const postElement =
            document.createElement("article");

        postElement.classList.add("post-card");

        postElement.innerHTML = `

            <div class="post-header">

                <div class="post-avatar">
                    ${post.avatar}
                </div>

                <div class="post-user">

                    <strong>
                        ${post.user}
                    </strong>

                    <span>
                        ${post.username}
                    </span>

                </div>

            </div>


            <div class="post-content">

                <p>
                    ${post.content}
                </p>

            </div>


            <img
                class="post-image"
                src="${post.image}"
                alt="Imagem da publicação"
            >


            <div class="post-info">

                <span>
                    ♥ ${post.likes} curtidas
                </span>

                <span>
                    ${post.comments.length} comentários
                </span>

            </div>


            <div class="post-actions">

                <button
                    class="post-action like"
                    data-id="${post.id}"
                >
                    ♥ Curtir
                </button>

                <button
                    class="post-action"
                    onclick="openPost(${post.id})"
                >
                    💬 Comentar
                </button>

                <button
                    class="view-post"
                    onclick="openPost(${post.id})"
                >
                    Ver publicação
                </button>

            </div>

        `;

        postsContainer.appendChild(postElement);

    });

}



/* =========================
   ABRIR POST
========================= */

function openPost(postId) {

    const post =
        posts.find(item => item.id === postId);

    if (!post) {
        return;
    }


    feedPage.classList.add("hidden");

    otherPage.classList.add("hidden");

    postPage.classList.remove("hidden");


    renderFullPost(post);

}



/* =========================
   POST COMPLETO
========================= */

function renderFullPost(post) {

    let commentsHTML = "";


    post.comments.forEach(comment => {

        commentsHTML += `

            <div class="comment">

                <div class="comment-avatar">
                    ${comment.avatar}
                </div>

                <div class="comment-content">

                    <strong>
                        ${comment.user}
                    </strong>

                    <p>
                        ${comment.text}
                    </p>

                </div>

            </div>

        `;

    });


    fullPostContainer.innerHTML = `

        <article class="full-post">

            <div class="post-header">

                <div class="post-avatar">
                    ${post.avatar}
                </div>

                <div class="post-user">

                    <strong>
                        ${post.user}
                    </strong>

                    <span>
                        ${post.username}
                    </span>

                </div>

            </div>


            <div class="post-content">

                <p>
                    ${post.content}
                </p>

            </div>


            <img
                class="post-image"
                src="${post.image}"
                alt="Imagem da publicação"
            >


            <div class="post-info">

                <span>
                    ♥ ${post.likes} curtidas
                </span>

                <span>
                    ${post.comments.length} comentários
                </span>

            </div>


            <div class="post-actions">

                <button
                    class="post-action like"
                    onclick="likePost(${post.id})"
                >
                    ♥ Curtir
                </button>

                <span></span>

            </div>


            <div class="comments-section">

                <h3>
                    Comentários
                </h3>

                <div id="commentsContainer">

                    ${commentsHTML}

                </div>


                <div class="comment-form">

                    <input
                        type="text"
                        id="commentInput"
                        placeholder="Escreva um comentário..."
                    >

                    <button
                        onclick="addComment(${post.id})"
                    >
                        Enviar
                    </button>

                </div>

            </div>

        </article>

    `;

}



/* =========================
   CURTIR POST
========================= */

function likePost(postId) {

    const post =
        posts.find(item => item.id === postId);

    if (!post) {
        return;
    }

    post.likes++;

    renderFullPost(post);

}



/* =========================
   ADICIONAR COMENTÁRIO
========================= */

function addComment(postId) {

    const input =
        document.getElementById("commentInput");

    const commentText =
        input.value.trim();


    if (commentText === "") {
        return;
    }


    const post =
        posts.find(item => item.id === postId);


    if (!post) {
        return;
    }


    post.comments.push({

        user: "Victor Oliveira",

        avatar: "V",

        text: commentText

    });


    renderFullPost(post);

}



/* =========================
   VOLTAR PARA O FEED
========================= */

backButton.addEventListener(
    "click",
    () => {

        postPage.classList.add("hidden");

        feedPage.classList.remove("hidden");

    }
);



/* =========================
   MENU LATERAL
========================= */

menuItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const page =
                item.dataset.page;


            menuItems.forEach(menu => {

                menu.classList.remove("active");

            });


            item.classList.add("active");


            if (page === "feed") {

                postPage.classList.add("hidden");

                otherPage.classList.add("hidden");

                feedPage.classList.remove("hidden");

            } else {

                feedPage.classList.add("hidden");

                postPage.classList.add("hidden");

                otherPage.classList.remove("hidden");

            }

        }
    );

});



/* =========================
   VOLTAR PELO BOTÃO
========================= */

returnFeedButton.addEventListener(
    "click",
    () => {

        otherPage.classList.add("hidden");

        feedPage.classList.remove("hidden");

        menuItems.forEach(menu => {

            menu.classList.remove("active");

        });

        document
            .querySelector('[data-page="feed"]')
            .classList.add("active");

    }
);



/* =========================
   INICIAR
========================= */

renderPosts();
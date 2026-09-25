document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       ELEMENTOS
    ======================================== */

    const createButton =
        document.querySelector(
            '[data-page="create"]'
        );

    const likedButton =
        document.querySelector(
            '[data-page="liked"]'
        );

    const feedButton =
        document.querySelector(
            '[data-page="feed"]'
        );

    const logoutButton =
        document.getElementById(
            "logoutButton"
        );

    const profileName =
        document.getElementById(
            "profileName"
        );

    const profileTag =
        document.getElementById(
            "profileTag"
        );


    /* ========================================
       USUÁRIO
    ======================================== */

    const userName =
        localStorage.getItem(
            "userName"
        );

    const userTag =
        localStorage.getItem(
            "userTag"
        );

    const currentUser =
        localStorage.getItem(
            "currentUser"
        );


    if (userName) {

        profileName.innerText =
            userName;

    }


    if (userTag) {

        profileTag.innerText =
            `@${userTag}`;

    } else if (currentUser) {

        profileTag.innerText =
            `@${currentUser}`;

    }


    /* ========================================
       IR PARA O FEED
    ======================================== */

    feedButton.addEventListener(
        "click",
        () => {

           window.location.href = 
            "../Post_Creation/index.html";

        }
    );


    /* ========================================
       CRIAR PUBLICAÇÃO
    ======================================== */

    createButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "../Post_Creation/index.html";

        }
    );


    /* ========================================
       POSTS CURTIDOS
    ======================================== */

    likedButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "../Liked_Posts/index.html";

        }
    );


    /* ========================================
       COMENTÁRIOS
    ======================================== */

    const commentButtons =
        document.querySelectorAll(
            ".comment-button"
        );

    commentButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                window.location.href =
                    "../Comments/index.html";

            }
        );

    });


    /* ========================================
       VER POST COMPLETO
    ======================================== */

    const viewPostButtons =
        document.querySelectorAll(
            ".view-post"
        );

    viewPostButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                window.location.href =
                    "../Comments/index.html";

            }
        );

    });


    /* ========================================
       VOLTAR PARA O FEED
    ======================================== */

    const backButton =
        document.getElementById(
            "backButton"
        );

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "./index.html";

            }
        );

    }


    /* ========================================
       BOTÃO VOLTAR DA PÁGINA VAZIA
    ======================================== */

    const returnFeedButton =
        document.getElementById(
            "returnFeedButton"
        );

    if (returnFeedButton) {

        returnFeedButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "./index.html";

            }
        );

    }


    /* ========================================
       SAIR
    ======================================== */

    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            () => {

                const confirmed =
                    confirm(
                        "Deseja realmente sair?"
                    );

                if (!confirmed) {
                    return;
                }


                localStorage.removeItem(
                    "currentUser"
                );


                window.location.href =
                    "../Login_in/index.html";

            }
        );

    }

});
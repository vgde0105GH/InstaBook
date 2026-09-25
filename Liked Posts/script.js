document.addEventListener("DOMContentLoaded", () => {

    const backButton =
        document.getElementById(
            "backButton"
        );

    const likedPosts =
        document.getElementById(
            "likedPosts"
        );

    const emptyMessage =
        document.getElementById(
            "emptyMessage"
        );


    /* ========================================
       VOLTAR PARA O FEED
    ======================================== */

    backButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "../Feed/index.html";

        }
    );


    /* ========================================
       DESCURTIR
    ======================================== */

    function activateUnlike(button) {

        button.addEventListener(
            "click",
            () => {

                const post =
                    button.closest(
                        ".liked-post"
                    );


                const confirmed =
                    confirm(
                        "Deseja remover a curtida deste post?"
                    );


                if (!confirmed) {
                    return;
                }


                post.remove();


                checkEmptyPosts();

            }
        );

    }


    document
        .querySelectorAll(
            ".unlike-button"
        )
        .forEach(
            activateUnlike
        );


    /* ========================================
       VER POST
    ======================================== */

    function activateView(button) {

        button.addEventListener(
            "click",
            () => {

                window.location.href =
                    "../Feed/index.html";

            }
        );

    }


    document
        .querySelectorAll(
            ".view-button"
        )
        .forEach(
            activateView
        );


    /* ========================================
       VERIFICAR SE ESTÁ VAZIO
    ======================================== */

    function checkEmptyPosts() {

        const posts =
            document.querySelectorAll(
                ".liked-post"
            );


        if (posts.length === 0) {

            emptyMessage.classList.remove(
                "hidden"
            );

        } else {

            emptyMessage.classList.add(
                "hidden"
            );

        }

    }

});
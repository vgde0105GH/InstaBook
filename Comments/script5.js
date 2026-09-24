document.addEventListener("DOMContentLoaded", () => {

    const commentsList =
        document.getElementById("commentsList");

    const commentInput =
        document.getElementById("commentInput");

    const addCommentButton =
        document.getElementById("addCommentButton");

    const backButton =
        document.getElementById("backButton");

    const sendButton =
        document.getElementById("sendButton");


    /* ========================================
       CURTIR COMENTÁRIO
    ======================================== */

    const likeButtons =
        document.querySelectorAll(".like");

    likeButtons.forEach((button) => {

        button.addEventListener("click", () => {

            if (button.classList.contains("liked")) {

                button.classList.remove("liked");

                button.innerText = "♡";

            } else {

                button.classList.add("liked");

                button.innerText = "♥";

            }

        });

    });


    /* ========================================
       EXCLUIR COMENTÁRIO
    ======================================== */

    function addDeleteEvent(button) {

        button.addEventListener("click", () => {

            const comment =
                button.closest(".comment");

            const confirmed =
                confirm(
                    "Deseja realmente excluir este comentário?"
                );

            if (!confirmed) {
                return;
            }

            comment.remove();

        });

    }


    const deleteButtons =
        document.querySelectorAll(".delete-button");

    deleteButtons.forEach((button) => {

        addDeleteEvent(button);

    });


    /* ========================================
       EDITAR COMENTÁRIO
    ======================================== */

    function addEditEvent(button) {

        button.addEventListener("click", () => {

            const comment =
                button.closest(".comment");

            const commentText =
                comment.querySelector(".comment-text");

            const currentContent =
                commentText.innerText
                    .replace(
                        commentText.querySelector("strong").innerText,
                        ""
                    )
                    .trim();

            const newContent =
                prompt(
                    "Edite seu comentário:",
                    currentContent
                );

            if (
                newContent === null ||
                newContent.trim() === ""
            ) {
                return;
            }

            const username =
                commentText.querySelector("strong");

            commentText.innerHTML = "";

            commentText.appendChild(username);

            commentText.append(
                " " + newContent.trim()
            );

        });

    }


    const editButtons =
        document.querySelectorAll(".edit-button");

    editButtons.forEach((button) => {

        addEditEvent(button);

    });


    /* ========================================
       RESPONDER
    ======================================== */

    const replyButtons =
        document.querySelectorAll(
            ".comment-action:not(.edit-button):not(.delete-button)"
        );

    replyButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const comment =
                button.closest(".comment");

            const username =
                comment.querySelector(
                    ".comment-text strong"
                ).innerText;

            commentInput.value =
                `@${username} `;

            commentInput.focus();

        });

    });


    /* ========================================
       ADICIONAR COMENTÁRIO
    ======================================== */

    function addComment() {

        const content =
            commentInput.value.trim();

        if (content === "") {

            alert(
                "Digite um comentário."
            );

            commentInput.focus();

            return;
        }


        const comment =
            document.createElement("div");

        comment.className = "comment";


        comment.innerHTML = `

            <div class="avatar avatar-roxo">
                V
            </div>

            <div class="comment-content">

                <div class="comment-text">

                    <strong>
                        @victor
                    </strong>

                    ${content}

                </div>

                <div class="comment-info">

                    <span>
                        Agora
                    </span>

                    <button class="comment-action">
                        Responder
                    </button>

                    <button class="comment-action edit-button">
                        Editar
                    </button>

                    <button class="comment-action delete-button">
                        Excluir
                    </button>

                </div>

            </div>

            <button class="like">
                ♡
            </button>

        `;


        commentsList.prepend(comment);


        /* ========================================
           ATIVAR BOTÃO CURTIR
        ======================================== */

        const likeButton =
            comment.querySelector(".like");

        likeButton.addEventListener(
            "click",
            () => {

                if (
                    likeButton.classList.contains("liked")
                ) {

                    likeButton.classList.remove(
                        "liked"
                    );

                    likeButton.innerText = "♡";

                } else {

                    likeButton.classList.add(
                        "liked"
                    );

                    likeButton.innerText = "♥";

                }

            }
        );


        /* ========================================
           ATIVAR EDITAR
        ======================================== */

        addEditEvent(
            comment.querySelector(".edit-button")
        );


        /* ========================================
           ATIVAR EXCLUIR
        ======================================== */

        addDeleteEvent(
            comment.querySelector(".delete-button")
        );


        /* ========================================
           ATIVAR RESPONDER
        ======================================== */

        comment
            .querySelector(
                ".comment-action:not(.edit-button):not(.delete-button)"
            )
            .addEventListener("click", () => {

                commentInput.value =
                    "@victor ";

                commentInput.focus();

            });


        commentInput.value = "";

    }


    addCommentButton.addEventListener(
        "click",
        addComment
    );


    /* ========================================
       ENTER PARA PUBLICAR
    ======================================== */

    commentInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                addComment();

            }

        }
    );


    /* ========================================
       BOTÃO ENVIAR DO CABEÇALHO
    ======================================== */

    sendButton.addEventListener(
        "click",
        addComment
    );


    /* ========================================
       VOLTAR
    ======================================== */

    backButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "../Feed/index.html";

        }
    );

});
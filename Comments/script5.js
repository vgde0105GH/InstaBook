document.addEventListener("DOMContentLoaded", () => {

    const commentsList =
        document.getElementById(
            "commentsList"
        );

    const commentInput =
        document.getElementById(
            "commentInput"
        );

    const addCommentButton =
        document.getElementById(
            "addCommentButton"
        );

    const backButton =
        document.getElementById(
            "backButton"
        );

    const sendButton =
        document.getElementById(
            "sendButton"
        );


    /* ========================================
       CURTIR COMENTÁRIO
    ======================================== */

    function activateLike(button) {

        button.addEventListener(
            "click",
            () => {

                if (
                    button.classList.contains(
                        "liked"
                    )
                ) {

                    button.classList.remove(
                        "liked"
                    );

                    button.innerText =
                        "♡";

                } else {

                    button.classList.add(
                        "liked"
                    );

                    button.innerText =
                        "♥";

                }

            }
        );

    }


    document
        .querySelectorAll(".like")
        .forEach(
            activateLike
        );


    /* ========================================
       EXCLUIR
    ======================================== */

    function activateDelete(button) {

        button.addEventListener(
            "click",
            () => {

                const comment =
                    button.closest(
                        ".comment"
                    );


                const confirmed =
                    confirm(
                        "Deseja realmente excluir este comentário?"
                    );


                if (!confirmed) {
                    return;
                }


                comment.remove();

            }
        );

    }


    document
        .querySelectorAll(
            ".delete-button"
        )
        .forEach(
            activateDelete
        );


    /* ========================================
       EDITAR
    ======================================== */

    function activateEdit(button) {

        button.addEventListener(
            "click",
            () => {

                const comment =
                    button.closest(
                        ".comment"
                    );


                const commentText =
                    comment.querySelector(
                        ".comment-text"
                    );


                const username =
                    commentText.querySelector(
                        "strong"
                    );


                const currentText =
                    commentText.innerText
                        .replace(
                            username.innerText,
                            ""
                        )
                        .trim();


                const newText =
                    prompt(
                        "Edite seu comentário:",
                        currentText
                    );


                if (
                    newText === null ||
                    newText.trim() === ""
                ) {

                    return;

                }


                commentText.innerHTML = "";


                commentText.appendChild(
                    username
                );


                commentText.append(
                    " " +
                    newText.trim()
                );

            }
        );

    }


    document
        .querySelectorAll(
            ".edit-button"
        )
        .forEach(
            activateEdit
        );


    /* ========================================
       RESPONDER
    ======================================== */

    function activateReply(button) {

        button.addEventListener(
            "click",
            () => {

                const comment =
                    button.closest(
                        ".comment"
                    );


                const username =
                    comment.querySelector(
                        ".comment-text strong"
                    ).innerText;


                commentInput.value =
                    `@${username} `;


                commentInput.focus();

            }
        );

    }


    document
        .querySelectorAll(
            ".comment-action:not(.edit-button):not(.delete-button)"
        )
        .forEach(
            activateReply
        );


    /* ========================================
       ADICIONAR COMENTÁRIO
    ======================================== */

    function addComment() {

        const content =
            commentInput.value.trim();


        if (content === "") {

            commentInput.focus();

            return;

        }


        const currentUser =
            localStorage.getItem(
                "userTag"
            ) || "victor";


        const comment =
            document.createElement(
                "div"
            );


        comment.className =
            "comment";


        comment.innerHTML = `

            <div class="avatar avatar-roxo">
                V
            </div>

            <div class="comment-content">

                <div class="comment-text">

                    <strong>
                        @${currentUser}
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


        commentsList.prepend(
            comment
        );


        /* Ativar funcionalidades */

        activateLike(
            comment.querySelector(
                ".like"
            )
        );


        activateEdit(
            comment.querySelector(
                ".edit-button"
            )
        );


        activateDelete(
            comment.querySelector(
                ".delete-button"
            )
        );


        activateReply(
            comment.querySelector(
                ".comment-action:not(.edit-button):not(.delete-button)"
            )
        );


        commentInput.value = "";

    }


    /* ========================================
       BOTÃO PUBLICAR
    ======================================== */

    addCommentButton.addEventListener(
        "click",
        addComment
    );


    /* ========================================
       ENTER
    ======================================== */

    commentInput.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                addComment();

            }

        }
    );


    /* ========================================
       BOTÃO ENVIAR
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
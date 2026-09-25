document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("loginForm");

    const tagInput =
        document.getElementById("tag");

    const passwordInput =
        document.getElementById("password");

    const rememberCheckbox =
        document.getElementById("remember");

    const submitButton =
        document.querySelector(".btn");


    /* ========================================
       LOGIN
    ======================================== */

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        let validForm = true;


        /* ========================================
           VALIDAR TAG
        ======================================== */

        if (tagInput.value.trim() === "") {

            tagInput
                .closest(".input-box")
                .style.borderColor =
                "var(--danger-color)";

            validForm = false;

        }


        /* ========================================
           VALIDAR SENHA
        ======================================== */

        if (passwordInput.value.trim() === "") {

            passwordInput
                .closest(".input-box")
                .style.borderColor =
                "var(--danger-color)";

            validForm = false;

        }


        /* ========================================
           VERIFICAR FORMULÁRIO
        ======================================== */

        if (!validForm) {

            alert(
                "Por favor, preencha a Tag e a senha."
            );

            return;

        }


        /* ========================================
           DADOS DO LOGIN
        ======================================== */

        const loginData = {

            tag:
                tagInput.value.trim(),

            password:
                passwordInput.value.trim()

        };


        console.log(
            "Dados do login:",
            loginData
        );


        /* ========================================
           CARREGAMENTO
        ======================================== */

        submitButton.innerText =
            "Entrando...";

        submitButton.disabled = true;

        submitButton.style.opacity = "0.7";


        /* ========================================
           LOGIN
        ======================================== */

        setTimeout(() => {

            if (rememberCheckbox.checked) {

                localStorage.setItem(
                    "rememberedTag",
                    loginData.tag
                );

            } else {

                localStorage.removeItem(
                    "rememberedTag"
                );

            }


            /* ========================================
               SALVAR USUÁRIO ATUAL
            ======================================== */

            localStorage.setItem(
                "currentUser",
                loginData.tag
            );

            /* ========================================
               IR PARA O FEED
            ======================================== */

            window.location.href =
                "../Feed/index.html";

        }, 1000);

    });


    /* ========================================
       REMOVER ERRO AO DIGITAR
    ======================================== */

    const inputs =
        document.querySelectorAll(
            ".input-box input"
        );

    inputs.forEach((input) => {

        input.addEventListener("input", () => {

            const inputBox =
                input.closest(".input-box");

            inputBox.style.borderColor =
                "var(--input-border)";

        });

    });


    /* ========================================
       RECUPERAR TAG SALVA
    ======================================== */

    const rememberedTag =
        localStorage.getItem(
            "rememberedTag"
        );

    if (rememberedTag) {

        tagInput.value =
            rememberedTag;

        rememberCheckbox.checked =
            true;

    }

});
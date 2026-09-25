document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("signForm");

    const inputs =
        document.querySelectorAll(
            ".input-box input"
        );

    const submitButton =
        document.querySelector(".btn");


    /* ========================================
       CRIAR CONTA
    ======================================== */

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        let validForm = true;


        /* ========================================
           DADOS DO FORMULÁRIO
        ======================================== */

        const formData = {

            email:
                document
                    .getElementById("email")
                    .value
                    .trim(),

            password:
                document
                    .getElementById("password")
                    .value
                    .trim(),

            tag:
                document
                    .getElementById("tag")
                    .value
                    .trim(),

            name:
                document
                    .getElementById("name")
                    .value
                    .trim()

        };


        /* ========================================
           VALIDAR CAMPOS
        ======================================== */

        inputs.forEach((input) => {

            const inputBox =
                input.closest(".input-box");

            if (input.value.trim() === "") {

                validForm = false;

                inputBox.style.borderColor =
                    "var(--danger-color)";

            } else {

                inputBox.style.borderColor =
                    "var(--input-border)";

            }

        });


        if (!validForm) {

            alert(
                "Por favor, preencha todos os campos."
            );

            return;

        }


        /* ========================================
           CARREGAMENTO
        ======================================== */

        submitButton.innerText =
            "Criando conta...";

        submitButton.disabled = true;

        submitButton.style.opacity = "0.7";


        /* ========================================
           CRIAR CONTA
        ======================================== */

        setTimeout(() => {

            /* Salvar usuário */

            localStorage.setItem(
                "userName",
                formData.name
            );

            localStorage.setItem(
                "userTag",
                formData.tag
            );

            console.log(
                "Dados do usuário:",
                formData
            );


            /* ========================================
               IR PARA LOGIN
            ======================================== */

            window.location.href =
                "../Login in/index.html";

        }, 1000);

    });


    /* ========================================
       REMOVER ERRO AO DIGITAR
    ======================================== */

    inputs.forEach((input) => {

        input.addEventListener("input", () => {

            const inputBox =
                input.closest(".input-box");

            inputBox.style.borderColor =
                "var(--input-border)";

        });

    });

});
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("signForm");

    const inputs =
        document.querySelectorAll(".input-box input");

    const submitButton =
        document.querySelector(".btn");


    /* ========================================
       ENVIO DO FORMULÁRIO
    ======================================== */

    form.addEventListener("submit", (event) => {

        event.preventDefault();


        let validForm = true;


        const formData = {

            email:
                document.getElementById("email").value.trim(),

            password:
                document.getElementById("password").value.trim(),

            tag:
                document.getElementById("tag").value.trim(),

            name:
                document.getElementById("name").value.trim()

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
           SIMULAÇÃO
        ======================================== */

        setTimeout(() => {

            alert(
                `Conta criada com sucesso, ${formData.name}!`
            );


            console.log(
                "Dados do usuário:",
                formData
            );


            form.reset();


            submitButton.innerText =
                "Criar Conta";

            submitButton.disabled = false;

            submitButton.style.opacity = "1";


        }, 1500);

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
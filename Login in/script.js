document.addEventListener("DOMContentLoaded", () => {

    // 1. Mapeia os elementos da página
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll(".input-box input");
    const submitButton = document.querySelector(".bnt");
    const rememberCheckbox = document.querySelector(
        '.options input[type="checkbox"]'
    );


    // 2. Evento quando o usuário tenta fazer login
    form.addEventListener("submit", (event) => {

        // Impede o formulário de recarregar a página
        event.preventDefault();

        let validForm = true;

        const formData = {};


        // 3. Verifica se os campos estão preenchidos
        inputs.forEach((input) => {

            const inputBox = input.closest(".input-box");

            if (input.value.trim() === "") {

                validForm = false;

                // Mostra o campo com borda vermelha
                inputBox.style.borderColor = "#fd5949";

            } else {

                // Remove a borda de erro
                inputBox.style.borderColor = "#dbdbdb";

                // Pega o placeholder do campo
                const key = input.getAttribute("placeholder");

                // Guarda o valor digitado
                formData[key] = input.value.trim();
            }
        });


        // 4. Se algum campo estiver vazio
        if (!validForm) {

            alert("Por favor, preencha a Tag e a senha.");

            return;
        }


        // 5. Mostra o estado de carregamento
        submitButton.innerText = "Entrando...";
        submitButton.disabled = true;
        submitButton.style.opacity = "0.7";


        // 6. Simula o processo de login
        setTimeout(() => {

            console.log("Dados do login:", formData);

            console.log(
                "Lembrar-me:",
                rememberCheckbox.checked
            );


            // 7. Simula login realizado com sucesso
            alert(
                `Login realizado com sucesso!\nTag: ${formData["Tag(#)"]}`
            );


            // 8. Salva a Tag caso "Lembrar-me" esteja marcado
            if (rememberCheckbox.checked) {

                localStorage.setItem(
                    "rememberedTag",
                    formData["Tag(#)"]
                );

            } else {

                localStorage.removeItem("rememberedTag");
            }


            // 9. Limpa o formulário
            form.reset();


            // 10. Restaura o botão
            submitButton.innerText = "Entrar";
            submitButton.disabled = false;
            submitButton.style.opacity = "1";

        }, 1500);

    });


    // 11. Remove a borda vermelha quando o usuário começa a digitar
    inputs.forEach((input) => {

        input.addEventListener("input", () => {

            const inputBox = input.closest(".input-box");

            inputBox.style.borderColor = "#a307ba";
        });

    });


    // 12. Recupera a Tag salva anteriormente
    const rememberedTag = localStorage.getItem("rememberedTag");

    if (rememberedTag) {

        inputs[0].value = rememberedTag;

        rememberCheckbox.checked = true;
    }

});
document.addEventListener("DOMContentLoaded", () => {
    // 1. Mapeia os elementos do formulário
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll(".input-box input");
    const submitButton = document.querySelector(".bnt");

    // 2. Evento quando o usuário clica em "Entrar"
    form.addEventListener("submit", (event) => {
        // Impede a página de recarregar imediatamente
        event.preventDefault(); 

        let validForm = true;
        const formData = {};

        // 3. Validação simples: verifica se todos os campos estão preenchidos
        inputs.forEach((input) => {
            const inputBox = input.closest(".input-box");

            if (input.value.trim() === "") {
                validForm = false;
                // Aplica uma borda vermelha de erro
                inputBox.style.borderColor = "#fd5949"; 
            } else {
                // Remove o erro se já estiver preenchido
                inputBox.style.borderColor = "#dbdbdb"; 
                
                // Salva o valor usando o placeholder como referência temporária
                const chave = input.getAttribute("placeholder");
                formData[chave] = input.value.trim();
            }
        });

        // 4. Se algum campo estiver vazio, avisa o usuário e para a execução
        if (!validForm) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // 5. Simulação de sucesso (Estilo Instagram/Facebook)
        // Altera o estado do botão para indicar carregamento
        submitButton.innerText = "Carregando...";
        submitButton.disabled = true;
        submitButton.style.opacity = "0.7";

        setTimeout(() => {
            alert(`Sucesso! Conta criada para o usuário: ${formData["Usuário"]}`);
            console.log("Dados enviados para o banco de dados:", formData);
            
            // Aqui você redirecionaria o usuário ou limparia o formulário
            form.reset();
            submitButton.innerText = "Entrar";
            submitButton.disabled = false;
            submitButton.style.opacity = "1";
        }, 1500);
    });

    // 6. Remove a borda vermelha de erro assim que o usuário começar a digitar
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            const caixaInput = input.closest(".input-box");
            caixaInput.style.borderColor = "#a307ba"; // Volta para a cor de foco do Instagram
        });
    });
});

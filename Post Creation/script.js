const postForm = document.querySelector("form");

const titleInput = document.getElementById("titulo");

const contentInput = document.getElementById("conteudo");

const imageInput = document.getElementById("imagem");


/* ========================================
   SELECIONAR IMAGEM
======================================== */

imageInput.addEventListener("change", () => {

    const imageFile = imageInput.files[0];


    if (!imageFile) {

        return;

    }


    if (!imageFile.type.startsWith("image/")) {

        alert("Selecione um arquivo de imagem.");

        imageInput.value = "";

        return;

    }


    const imageUrl = URL.createObjectURL(imageFile);


    let imagePreview =
        document.getElementById("imagePreview");


    if (!imagePreview) {

        imagePreview =
            document.createElement("img");

        imagePreview.id = "imagePreview";

        imagePreview.style.width = "100%";

        imagePreview.style.maxHeight = "300px";

        imagePreview.style.objectFit = "cover";

        imagePreview.style.borderRadius = "10px";

        imagePreview.style.marginTop = "15px";

        imageInput.parentElement.appendChild(
            imagePreview
        );

    }


    imagePreview.src = imageUrl;

});


/* ========================================
   ENVIAR POST
======================================== */

postForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const title =
        titleInput.value.trim();


    const content =
        contentInput.value.trim();


    const imageFile =
        imageInput.files[0];


    if (title === "") {

        alert("Digite um título para o post.");

        titleInput.focus();

        return;

    }


    if (content === "") {

        alert("Digite o conteúdo do post.");

        contentInput.focus();

        return;

    }


    const post = {

        title: title,

        content: content,

        image: imageFile
            ? imageFile.name
            : null

    };


    console.log("Post criado:", post);


    alert("Post criado com sucesso!");


    postForm.reset();


    const imagePreview =
        document.getElementById("imagePreview");


    if (imagePreview) {

        imagePreview.remove();

    }

});
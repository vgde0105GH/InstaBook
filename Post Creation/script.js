const postForm =
    document.querySelector("form");

const titleInput =
    document.getElementById("titulo");

const contentInput =
    document.getElementById("conteudo");

const imageInput =
    document.getElementById("imagem");

const cancelButton =
    document.getElementById("cancelButton");


/* ========================================
   SELECIONAR IMAGEM
======================================== */

imageInput.addEventListener("change", () => {

    const imageFile =
        imageInput.files[0];


    if (!imageFile) {
        return;
    }


    if (!imageFile.type.startsWith("image/")) {

        imageInput.value = "";

        return;
    }


    const imageUrl =
        URL.createObjectURL(imageFile);


    let imagePreview =
        document.getElementById(
            "imagePreview"
        );


    if (!imagePreview) {

        imagePreview =
            document.createElement("img");

        imagePreview.id =
            "imagePreview";

        imagePreview.style.width =
            "100%";

        imagePreview.style.maxHeight =
            "300px";

        imagePreview.style.objectFit =
            "cover";

        imagePreview.style.borderRadius =
            "10px";

        imagePreview.style.marginTop =
            "15px";


        imageInput.parentElement.appendChild(
            imagePreview
        );

    }


    imagePreview.src =
        imageUrl;

});


/* ========================================
   ENVIAR POST
======================================== */

postForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const title =
            titleInput.value.trim();

        const content =
            contentInput.value.trim();

        const imageFile =
            imageInput.files[0];


        /* ========================================
           VALIDAR TÍTULO
        ======================================== */

        if (title === "") {

            titleInput.focus();

            return;

        }


        /* ========================================
           VALIDAR CONTEÚDO
        ======================================== */

        if (content === "") {

            contentInput.focus();

            return;

        }


        /* ========================================
           CRIAR POST
        ======================================== */

        const post = {

            id:
                Date.now(),

            title:
                title,

            content:
                content,

            image:
                imageFile
                    ? imageFile.name
                    : null,

            author:
                localStorage.getItem(
                    "userTag"
                ) || "victor",

            likes:
                0,

            comments:
                0

        };


        /* ========================================
           SALVAR POST
        ======================================== */

        const savedPosts =
            JSON.parse(
                localStorage.getItem("posts")
            ) || [];


        savedPosts.push(post);


        localStorage.setItem(
            "posts",
            JSON.stringify(savedPosts)
        );


        /* ========================================
           VOLTAR PARA O FEED
        ======================================== */

        window.location.href =
            "../Feed/index.html";

    }
);


/* ========================================
   CANCELAR
======================================== */

cancelButton.addEventListener(
    "click",
    () => {

        window.location.href =
            "../Feed/index.html";

    }
);
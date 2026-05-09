

const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

const analisarBtn = document.getElementById("analisarBtn");

const loading = document.getElementById("loading");

const resultado = document.getElementById("resultado");

const risco = document.getElementById("risco");

const classificacao = document.getElementById("classificacao");

/* PREVIEW */

imageInput.addEventListener("change", function() {

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(event){

            preview.src = event.target.result;
            preview.style.display = "block";

        }

        reader.readAsDataURL(file);

    }

});

/* IA */

analisarBtn.addEventListener("click", function(){

    if(preview.src === ""){

        alert("Envie uma imagem primeiro.");
        return;

    }

    resultado.style.display = "none";

    loading.style.display = "block";

    setTimeout(() => {

        loading.style.display = "none";

        resultado.style.display = "block";

        const chance = Math.floor(Math.random() * 100);

        risco.innerText = chance + "%";

        if(chance < 40){

            classificacao.innerText = "Benigno";

        } else if(chance < 70){

            classificacao.innerText = "Suspeita";

        } else {

            classificacao.innerText = "Alto Risco";

        }

    }, 3000);

});

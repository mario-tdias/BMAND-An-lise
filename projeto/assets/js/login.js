const loginForm = document.getElementById("loginForm");

if(loginForm){

    // função para recolher dados e realizar o login

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("email").value;

        const senha = document.getElementById("senha").value;

        // login simulado com informações fictícias

        const medicoEmail = "medico@bmand.com";

        const medicoSenha = "123456";

        if(
            email === medicoEmail &&
            senha === medicoSenha
        ){

            localStorage.setItem("medicoLogado", "true");

            window.location.href = "../dashboard/dashboard.html";

        } else {

            alert("Acesso negado.");

        }

    });

}

// função logout removendo a propriedade "medicoLogado"

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function(){

    localStorage.removeItem("medicoLogado");

    window.location.href = "../login/login.html";

});


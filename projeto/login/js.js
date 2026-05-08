function login(){
    let user = window.document.getElementById('user').value;
    let password = window.document.getElementById('password').value;
    let res = window.document.getElementById('res');

    console.log(user);
    console.log(password);
    if ( user == "adm" && password == "123"){
        res.innerHTML = ("BEM VINDO!")
        window.location.href = "../index.html";
    } else {
        res.innerHTML = ("Senha Incorreta!");
    }
}
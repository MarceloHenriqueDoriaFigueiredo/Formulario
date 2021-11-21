console.log(
    alert ("Seja bem vindo ao formulario sobre a LGPD")
);
function validar() {
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var Email = document.getElementById("Email");
    var Experiencia = document.getElementById("Experiencia");
    
    if (nome.value == "") {
        alert ("Nome não informado");

        nome.focus();
        return;
    }
    if (sobrenome.value == "") {
        alert("Último nome não informado");

        sobrenome.focus();
        return;
    }
    if (Email.value == "") {
        alert ("Email não informado");

        Email.focus();
        return;
    }
    alert ("Formulario enviado!");
}
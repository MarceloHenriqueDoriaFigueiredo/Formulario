console.log(
    alert ("Seja bem vindo ao formulario sobre a LGPD")
);
const nameinput = document.querySelector("#nome");
const sobrenomeinput = document.querySelector("#sobrenome");
const emailinput = document.querySelector("#Email");
const subimitbutton = document.querySelector("#button");
const erromensagem = document.querySelector(".msg");

subimitbutton.addEventListener("click", (evento) =>{
    evento.preventDefault()

    const namevalue = nameinput.value;
    const sobrenomevalue = sobrenomeinput.value;
    const emailvalue = emailinput.value;

    if (namevalue === "" || sobrenomevalue === "" || emailvalue === ""){
        erromensagem.textContent = "Dados não preenchidos, por favor preencher todos os campos!";
        erromensagem.classList = "error";
        erromensagem.style.textAlign = "Center";
        setTimeout(() => {
            erromensagem.textContent = "";
            erromensagem.classList = "";
        }, 3000);
        return;
    }
    nameinput.value = "";
    sobrenomeinput.value = "";
    emailinput.value = "";
    console.log(
        alert("Dados enviados")
    );
})
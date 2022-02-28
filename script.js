console.log(
    alert("Bem vindo ao formulario LGPD, por favor preencher todas as informações")
);
const nameinput = document.querySelector("#username");
const emailinput = document.querySelector("#email");
const subimitbutton = document.querySelector("#button");
const erromensagem = document.querySelector(".msg");

subimitbutton.addEventListener("click", (evento) =>{
    evento.preventDefault()

    const namevalue = nameinput.value;
    const emailvalue = emailinput.value;

    if (namevalue === "" || emailvalue === ""){
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
    emailinput.value = "";
    console.log(
        alert("Dados enviados")
    );
})
document.addEventListener("DOMContentLoaded", () => {
// Validação do formulário
const form = document.querySelector(".form-contato");
if (form) {
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nome) {
    alert("Por favor, informe seu nome ;)");
    return;
    }
    if (!mensagem) {
    alert("A mensagem não pode ser vazia :)");
    return;
    }
    if (!email) {
    alert("Por favor, informe seu e-mail :)");
    return;
    }
    if (!emailValido) {
    alert("Por favor, insira um e-mail válido :)");
    return;
    }
    form.reset();
    alert("Sua mensagem foi enviada com sucesso! ;)");
});
}

const botaoTema = document.getElementById("botao-tema");
if (botaoTema) {
    botaoTema.style.backgroundColor = "#ffffff";

    botaoTema.addEventListener("click", () => {
        document.body.classList.toggle("tema-claro");

        if (document.body.classList.contains("tema-claro")) {
        botaoTema.style.backgroundColor = "#28774f";
        } else {
        botaoTema.style.backgroundColor = "#ffffff";
        }
    });
    }
});
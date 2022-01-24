// Seleciona botões
var botaoCriptografar = document.querySelector("#botao-criptografar");
var botaoDescriptografar = document.querySelector("#botao-descriptografar");
var botaoCriptografarCesar = document.querySelector("#botao-criptografar-cesar");
var botaoDescriptografarCesar = document.querySelector("#botao-descriptografar-cesar");
var mensagem = document.querySelector("#input-mensagem").value;
var criptografia = document.querySelector("#cripts");
var formAlura = document.querySelector(".form-alura");
var formCesar = document.querySelector(".form-cesar");
var mensagemAlura = document.querySelector("#input-mensagem");
var mensagemCesar = document.querySelector("#input-mensagem-cesar");
var mensagemResposta = document.querySelector("#resposta-mensagem");
var criptografiaSelecionada;
var respostaMensagem = document.querySelector("#resposta-mensagem");
var botaoCopiar = document.querySelector("#botao-copiar");

var form = document.querySelector(".form-alura");
form.addEventListener("submit", function(event) {
    event.preventDefault()
});


window.addEventListener("load", function() {
    criptografia.value = "alura";
    mensagemAlura.value = "";
    mensagemCesar.value = "";
    mensagemResposta.value = "";
});


// Escolhe a criptografia
criptografia.addEventListener("change", function() {
    if(criptografia.value == "cesar") {
        formCesar.classList.remove("invisivel");
        formAlura.classList.add("invisivel");
        mensagemCesar.value = "";
        mensagemResposta.value = "";
        
    } else {
        formCesar.classList.add("invisivel");
        formAlura.classList.remove("invisivel");
        mensagemAlura.value = "";
        mensagemResposta.value = "";
    }
})


botaoCriptografar.addEventListener("click", criptografaAlurex);
botaoCriptografarCesar.addEventListener("click", criptografaCesar);
botaoDescriptografar.addEventListener("click", descriptografaAlurex);
botaoDescriptografarCesar.addEventListener("click", descriptografaCesar);
botaoCopiar.addEventListener("click", copiaTexto);

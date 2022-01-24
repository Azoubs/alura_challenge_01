var respostaMensagem = document.querySelector("#resposta-mensagem");
var botaoCopiar = document.querySelector("#botao-copiar");


function copiaTexto() {
    var mensagem = respostaMensagem;
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value);
}



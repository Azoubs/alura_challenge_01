var vogais = [ "a", "e", "i", "o", "u" ];
var vogaisSegredo = [ "ai", "enter", "imes", "ober", "ufat" ];
var novaMensagem = [];
var resultadoMensagem = document.querySelector("#resposta-mensagem");


function criptografaAlurex() {
    var mensagem = document.querySelector("#input-mensagem").value;
    var RegExpression = /^[a-z\s]*$/;
    if (!RegExpression.test(mensagem)) {
        resultadoMensagem.value = "Por favor, digite apenas letras minúsculas! ♥";
        return;
    }

    var arrayMensagem = Array.from(mensagem);
    for(var i = 0; i < arrayMensagem.length; i++) {
        if(vogais.includes(arrayMensagem[i])) {
            var indexVogais = vogais.indexOf(arrayMensagem[i]);
            arrayMensagem[i] = vogaisSegredo[indexVogais];
        }
    }
    var mensagemFinal = arrayMensagem.join("");
    resultadoMensagem.value = mensagemFinal;
}

function descriptografaAlurex() {
    var mensagem = document.querySelector("#input-mensagem").value;

    var RegExpression = /^[a-z\s]*$/;
    if (!RegExpression.test(mensagem)) {
        resultadoMensagem.value = "Por favor, digite apenas letras minúsculas! ♥";
        return;
    }
    if (mensagem.includes("ai")) {
        mensagem = mensagem.replaceAll("ai", "a")
    }
    if (mensagem.includes("enter")) {
        mensagem = mensagem.replaceAll("enter", "e")
    }
    
    if (mensagem.includes("imes")) {
        mensagem = mensagem.replaceAll("imes", "i")
    }
    
    if (mensagem.includes("ober")) {
        mensagem = mensagem.replaceAll("ober", "o")
    }
    
    if (mensagem.includes("ufat")) {
        mensagem = mensagem.replaceAll("ufat", "u")
    }
    
    resultadoMensagem.value = mensagem;
}
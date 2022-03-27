function criptografar() {
    let mensagem = texto.value;
    let arrayMensagem = Array.from(mensagem);
    
    for(let i = 0; i < arrayMensagem.length; i++) {
        if(vogais.includes(arrayMensagem[i])) {
            var indexVogais = vogais.indexOf(arrayMensagem[i]);
            arrayMensagem[i] = vogaisSegredo[indexVogais];
        }
    }
    let mensagemFinal = arrayMensagem.join("");
    resultado.value = mensagemFinal;
}


var alfabeto = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" 
];

var resultadoMensagem = document.querySelector("#resposta-mensagem");

function criptografaCesar() {
    var mensagem = document.querySelector("#input-mensagem-cesar").value;
    var RegExpression = /^[a-z\s]*$/;
    if (!RegExpression.test(mensagem)) {
        resultadoMensagem.value = "Por favor, digite apenas letras minúsculas! ♥";
        return;
    }

    var chave = document.querySelector("#chave-cesar").value;
    if(chave < 0 || chave > 26) {
        resultadoMensagem.value = "Por favor, digite um número entre 1 e 26! ♥";
        return;
    }

    var arrayMensagem = []
    var novaMensagem = []
    var novaMensagemDois = []

    for (var i = 0; i < mensagem.length; i++) {
        var letra = mensagem[i]
        if (alfabeto.includes(letra)) {
            // console.log(letra)
            arrayMensagem.push(letra);
                // 26 - chave para decodificar
            novaMensagem.push((alfabeto.indexOf(letra) +  parseInt(chave)) % 26)
            // console.log(alfabeto.indexOf(letra))
        } else {
            novaMensagem.push(mensagem[i])
        }
    
    }
    console.log(arrayMensagem);
   console.log(novaMensagem)
    
    for (var i = 0; i < novaMensagem.length; i++) {
        if(Number.isInteger(novaMensagem[i])) {
            var letra = novaMensagem[i]
            novaMensagemDois.push(alfabeto[letra])
        }
        else {
            novaMensagemDois.push(" ")
        }
    }
    console.log(novaMensagemDois)
    resultadoMensagem.value = novaMensagemDois.join("");
}

function descriptografaCesar() {
    var mensagem = document.querySelector("#input-mensagem-cesar").value;

    var RegExpression = /^[a-z\s]*$/;
    if (!RegExpression.test(mensagem)) {
        resultadoMensagem.value = "Por favor, digite apenas letras minúsculas! ♥";
        return;
    }

    var chave = document.querySelector("#chave-cesar").value;
    if(chave < 0 || chave > 26) {
        resultadoMensagem.value = "Por favor, digite um número entre 1 e 26! ♥";
        return;
    }
    var arrayMensagem = []
    var novaMensagem = []
    var novaMensagemDois = []

    for (var i = 0; i < mensagem.length; i++) {
        var letra = mensagem[i]
        if (alfabeto.includes(letra)) {
            // console.log(letra)
            arrayMensagem.push(letra);
                // 26 - chave para decodificar
            novaMensagem.push((alfabeto.indexOf(letra) +  (26 - parseInt(chave))) % 26);
            // console.log(alfabeto.indexOf(letra))
        } else {
            novaMensagem.push(mensagem[i])
        }
    
    }
    console.log(arrayMensagem);
   console.log(novaMensagem)
    
    for (var i = 0; i < novaMensagem.length; i++) {
        if(Number.isInteger(novaMensagem[i])) {
            var letra = novaMensagem[i]
            novaMensagemDois.push(alfabeto[letra])
        }
        else {
            novaMensagemDois.push(" ")
        }
    }
    console.log(novaMensagemDois)
    resultadoMensagem.value = novaMensagemDois.join("");
}
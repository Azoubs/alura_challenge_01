function descriptografar() {
    let mensagem = texto.value;

    if (validaInput(mensagem) && mensagem.length > 0) {        
        resultado.value = verificaVogais(mensagem);
    } 
    else {
        resultado.value = "Por favor, digite uma mensagem válida!"
    }
}

function verificaVogais(mensagem) {
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
    return mensagem;
}
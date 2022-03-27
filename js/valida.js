function validaInput(texto) {
    let RegExpression = /^[a-z\s]*$/;
    if(!RegExpression.test(texto)) {
        return false;
    }
    return true;
}
let texto = document.querySelector('.formulario__input__texto');
let resultado = document.querySelector('.formulario__input__resultado');
let botaoCriptografar = document.querySelector('#botao_criptografar');
let botaoDescriptografar = document.querySelector('#botao_descriptografar');
let botaoCopiar = document.querySelector('#copiar');

// Variáveis x
let vogais = [ 'a', 'e', 'i', 'o', 'u' ];
let vogaisSegredo = [ 'ai', 'enter', 'imes', 'ober', 'ufat' ];
let novaMensagem = [];

botaoCriptografar.addEventListener('click', criptografar);
botaoDescriptografar.addEventListener('click', descriptografar);
botaoCopiar.addEventListener('click', copiar);
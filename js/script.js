const textoDigitado = document.getElementsByClassName("formulario__texto")[0];
const imagemErro = document.getElementsByClassName("mensagem__imagem-chat")[0];
const imagemResultado = document.getElementsByClassName("mensagem__imagem-check")[0];
const mensagemTitulo = document.getElementsByClassName("mensagem__titulo")[0];
const resultado = document.getElementsByClassName("exibicao__resultado")[0];
const botaoCopiar = document.getElementsByClassName("exibicao__btn-copiar")[0];

function verificacao() {
  if (/[EeÉéÈèÊêIiÍíÌìÎîAaÁáÀàÂâÃãOoÓóÒòÔôÕõUuÚúÙùÛû]|\d/.test(textoDigitado.value)) {
    ocultar(imagemErro);
    mostrar(imagemResultado);
    mostrar(resultado);
    mostrar(botaoCopiar);
  } else {
    mostrar(imagemErro);
    ocultar(imagemResultado);
    ocultar(resultado);
    ocultar(botaoCopiar);
    mensagemTitulo.innerText = `A frase ou a palavra digitada precisa conter vogais!`;
  }
}

function ocultar(elemento) {
  elemento.classList.add("ocultar");
}

function mostrar(elemento) {
  elemento.classList.remove("ocultar");
}

const btnCriptografar = document.getElementsByClassName("btn__criptografar")[0];
btnCriptografar.addEventListener("click", () => {
  verificacao((resultado.innerText = criptografar(textoDigitado.value)));
});

const btnDescriptografar = document.getElementsByClassName("btn__descriptografar")[0];
btnDescriptografar.addEventListener("click", () => {
  verificacao((resultado.innerText = descriptografar(textoDigitado.value)));
});

function criptografar(valor) {
  mensagemTitulo.innerText = "Mensagem criptografada com sucesso!";
  return valor
    .replaceAll("E", "ENTER")
    .replaceAll("e", "enter")
    .replaceAll("É", "ÉNTER")
    .replaceAll("é", "énter")
    .replaceAll("È", "ÈNTER")
    .replaceAll("è", "ènter")
    .replaceAll("Ê", "ÊNTER")
    .replaceAll("ê", "ênter")
    .replaceAll("I", "IMES")
    .replaceAll("i", "imes")
    .replaceAll("Í", "ÍMES")
    .replaceAll("í", "ímes")
    .replaceAll("Ì", "ÌMES")
    .replaceAll("ì", "ìmes")
    .replaceAll("Î", "ÎMES")
    .replaceAll("î", "îmes")
    .replaceAll("A", "AI")
    .replaceAll("a", "ai")
    .replaceAll("Á", "ÁI")
    .replaceAll("á", "ái")
    .replaceAll("À", "ÀI")
    .replaceAll("à", "ài")
    .replaceAll("Â", "ÂI")
    .replaceAll("â", "âi")
    .replaceAll("Ã", "ÃI")
    .replaceAll("ã", "ãi")
    .replaceAll("O", "OBER")
    .replaceAll("o", "ober")
    .replaceAll("Ó", "ÓBER")
    .replaceAll("ó", "óber")
    .replaceAll("Ò", "ÒBER")
    .replaceAll("ò", "òber")
    .replaceAll("Ô", "ÔBER")
    .replaceAll("ô", "ôber")
    .replaceAll("Õ", "ÕBER")
    .replaceAll("õ", "õber")
    .replaceAll("U", "UFAT")
    .replaceAll("u", "ufat")
    .replaceAll("Ú", "ÚFAT")
    .replaceAll("ú", "úfat")
    .replaceAll("Ù", "ÙFAT")
    .replaceAll("ù", "ùfat")
    .replaceAll("Û", "ÛFAT")
    .replaceAll("û", "ûfat");
}

function descriptografar(valor) {
  mensagemTitulo.innerText = "Mensagem descriptografada com sucesso!";
  return valor
    .replaceAll("ENTER", "E")
    .replaceAll("enter", "e")
    .replaceAll("ÉNTER", "É")
    .replaceAll("énter", "é")
    .replaceAll("ÈNTER", "È")
    .replaceAll("ènter", "è")
    .replaceAll("ÊNTER", "Ê")
    .replaceAll("ênter", "ê")
    .replaceAll("IMES", "I")
    .replaceAll("imes", "i")
    .replaceAll("ÍMES", "Í")
    .replaceAll("ímes", "í")
    .replaceAll("ÌMES", "Ì")
    .replaceAll("ìmes", "ì")
    .replaceAll("ÎMES", "Î")
    .replaceAll("îmes", "î")
    .replaceAll("AI", "A")
    .replaceAll("ai", "a")
    .replaceAll("ÁI", "Á")
    .replaceAll("ái", "á")
    .replaceAll("ÀI", "À")
    .replaceAll("ài", "à")
    .replaceAll("ÂI", "Â")
    .replaceAll("âi", "â")
    .replaceAll("ÃI", "Ã")
    .replaceAll("ãi", "ã")
    .replaceAll("OBER", "O")
    .replaceAll("ober", "o")
    .replaceAll("ÓBER", "Ó")
    .replaceAll("óber", "ó")
    .replaceAll("ÒBER", "Ò")
    .replaceAll("òber", "ò")
    .replaceAll("ÔBER", "Ô")
    .replaceAll("ôber", "ô")
    .replaceAll("ÕBER", "Õ")
    .replaceAll("õber", "õ")
    .replaceAll("UFAT", "U")
    .replaceAll("ufat", "u")
    .replaceAll("ÚFAT", "Ú")
    .replaceAll("úfat", "ú")
    .replaceAll("ÙFAT", "Ù")
    .replaceAll("ùfat", "ù")
    .replaceAll("ÛFAT", "Û")
    .replaceAll("ûfat", "û");
}

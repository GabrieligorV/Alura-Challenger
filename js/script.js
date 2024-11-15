const textoDigitado = document.getElementsByClassName("formulario__texto")[0];
const exibicaoImagemChat = document.getElementsByClassName("exibicao__imagem--chat")[0];
const exibicaoImagemCheck = document.getElementsByClassName("exibicao__imagem--check")[0];
const exibicaoTitulo = document.getElementsByClassName("exibicao__titulo")[0];
const exibicaoResultado = document.getElementsByClassName("exibicao__resultado")[0];
const botaoCopiar = document.getElementsByClassName("exibicao__btn-copiar")[0];

function verificandoValor() {
  if (/[aeiouAEIOU]|\d/.test(textoDigitado.value) || undefined) {
    exibicaoImagemChat.classList.add("ocultar");
    exibicaoImagemCheck.classList.remove("ocultar");
    botaoCopiar.classList.remove("ocultar");
    exibicaoResultado.classList.remove("ocultar");
    exibicaoTitulo.innerText = "Mensagem criptografada com sucesso!";
    console.log("SIM");
  } else {
    exibicaoImagemChat.classList.remove("ocultar");
    exibicaoImagemCheck.classList.add("ocultar");
    botaoCopiar.classList.add("ocultar");
    exibicaoTitulo.innerText = "Nenhuma mensagem encontrada!";
    exibicaoResultado.classList.remove("ocultar");
    exibicaoResultado.innerText =
      "Digite apenas palavras que possuam vogais sem acentos.";
    console.log("nÃO");
  }
}

const btnCriptografar = document.getElementsByClassName("btn__criptografar")[0];
btnCriptografar.addEventListener("click", () => {
  exibicaoResultado.innerText = criptografar(textoDigitado.value);
  verificandoValor();
});

const btnDescriptografar = document.getElementsByClassName("btn__descriptografar")[0];
btnDescriptografar.addEventListener("click", () => {
  exibicaoResultado.innerText = descriptografar(textoDigitado.value);
  verificandoValor();
});

function criptografar(valor) {
  return valor
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
}

function descriptografar(valor) {
  return valor
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
}

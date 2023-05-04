import validator from "./validator.js";

document.getElementById("enviar").addEventListener("click", onClickEnviar); // add o evento de clique ao botão vinculando a função

function onClickEnviar() {
  const cartaoCredito = lerCartaoCredito();
  const valido = validator.isValid(cartaoCredito);
  const numeroMascarado = validator.maskify(cartaoCredito);
  escreverResultado(valido, numeroMascarado);
}

function lerCartaoCredito() {
  //assinatura da função
  const numerosInput = document.getElementById("numerosInput").value; //implementação da função
  return numerosInput;
}

function escreverResultado(valido, numeroMascarado) {
  if (valido) {
    document.getElementById(
      "validade"
    ).innerHTML = `O cartão ${numeroMascarado} é válido. Boas compras!!`;
    document.getElementById("validade").classList.add("validade-visivel");
    document.getElementById("validade").classList.remove("validade-invisivel");
  } else {
    document.getElementById(
      "validade"
    ).innerHTML = `O cartão ${numeroMascarado} é inválido`;
    document.getElementById("validade").classList.add("validade-visivel");
    document.getElementById("validade").classList.remove("validade-invisivel");
  }
}

//         // Atualiza o overlay com o valor digitado
//         document.querySelector('.overlay').textContent = inputValor;
//       });

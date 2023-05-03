const validator = {
  isValid: function (creditCardNumber) {

    const digitos = creditCardNumber.split("");

    for (let i = digitos.length - 2; i >= 0; i -= 2) {
      //ponto de partida; Condição de parada; incremento
      let numero = parseInt(digitos[i]);
      numero *= 2;

      if (numero > 9) {
        // separando os digitos em unidade e dezena para soma-los

        const unidade = numero % 10;
        numero = Math.floor(numero / 10); // abreviação: numero /= 10
        const dezena = numero;

        numero = unidade + dezena;
      }

      digitos[i] = numero;
    }
    
    let somaDigitos = 0;
    for (let i = 0; i < digitos.length; i++) {
      somaDigitos += parseInt(digitos[i]);
    }
    
    return somaDigitos % 10 === 0;

    // a linha acima é o mesmo do bloco abaixo:
    // if (somaDigitos % 10 === 0) {
    //   return true
    // } else {
    //   return false
    // }
  },

  maskify: function (creditCardNumber) {
    const numerosMascarados = creditCardNumber.replace(/.(?=.{4,}$)/g, "#"); // expressão regular
    return numerosMascarados;
  },
};

export default validator; // exporta o objeto

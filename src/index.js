function converterParaArray() {
  document.getElementById('numerosInput').addEventListener('input', function(event) {
    const inputValor = event.target.value;
    document.querySelector('.overlay').textContent = inputValor;
    });
    
    var numerosDigitados = document.getElementById('numerosInput').value;
    var numerosAsteriscos = numerosDigitados.replace(/.(?=.{4,}$)/g, '*');
    var numerosIndividuais = numerosDigitados.split('');
     
    for (var i = numerosIndividuais.length - 2; i >= 0; i -= 2) { 
      numerosIndividuais[i] *= 2;
      if (numerosIndividuais[i] > 9) { 
        numerosIndividuais[i] -= 9;
      }
    }
  
    var soma = 0;
    
    for (var i = 0; i < numerosIndividuais.length; i++) { 
      soma += parseInt(numerosIndividuais[i]);
    }
  
    if (soma % 10 === 0) {
      document.getElementById('validade').innerHTML = `O cartão ${numerosAsteriscos} é válido`;
    } else {
      document.getElementById('validade').innerHTML = `O cartão ${numerosAsteriscos} é inválido`;
    }
  }

(function() {
  var arrStrings = ['erik', 'leonardo', 'andres', 'gerardo', 'jan', 'renzo'];
  var result = document.getElementById('result2');

  const buttonCapitalLetter = document.getElementById('button-capital-letter');
  const buttonAscendingOrder = document.getElementById('button-ascending-order');
  // función para encontrar la cadena más larga y que empiece con inicial mayúscula;
  const firstCapitalLetter = () => {
    var longWord = arrStrings[0];
    var auxString = '';
    for (let i = 1;i < arrStrings.length; i++) {
      if (arrStrings[i].length > longWord.length) {
        longWord = arrStrings[i];
      } 
    }

    for (let j = 1;j < longWord.length; j++) {
      auxString = auxString + longWord[j];
    }

    var firstCapitalLetter = longWord[0].toUpperCase();
    auxString = firstCapitalLetter + auxString;
    console.log('la cadena más larga:' + auxString);
    result.innerHTML = auxString;
  };
  // función para ordenar los elementos del arreglo en forma ascendente(a-z) y mostrar la nueva lista
  const ascendingOrder = () => {
    var auxString = '';
    for (let i = 0;i < arrStrings.length; i++) {
      for (let j = i;j < arrStrings.length;j++) {
        if (arrStrings[i] > arrStrings[j]) {
          auxString = arrStrings[i];
          arrStrings[i] = arrStrings[j];
          arrStrings[j] = auxString;
        }
      }
    }
    console.log(arrStrings);
    result.innerHTML = arrStrings;
  };
  // eventos para los buttons
  buttonCapitalLetter.addEventListener('click', firstCapitalLetter);
  buttonAscendingOrder.addEventListener('click', ascendingOrder);
})();
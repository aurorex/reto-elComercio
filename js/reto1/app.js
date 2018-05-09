(function() {
  var arrNumbers = [45, 75, 200, 256, 1, 27];
  var resultElement = document.getElementById('result');

  const buttonHigherNumber = document.getElementById('button-higher');
  const buttonLessNumber = document.getElementById('button-less');
  const buttonSecondNumber = document.getElementById('button-second-higher');
  // función para encontrar el número mayor
  const higherNumber = () => {
    var maxNumber = arrNumbers[0];
    for (let i = 0;i < arrNumbers.length;i++) {
      if (arrNumbers[i] > maxNumber) {
        maxNumber = arrNumbers[i];
      }
    }
    resultElement.innerHTML = maxNumber;
  };
  // función para encontra el número menor del arreglo
  const lessNumber = () => {
    var minNumber = arrNumbers[0];
    for (let i = 0;i < arrNumbers.length;i++) {
      if (minNumber > arrNumbers[i]) {
        minNumber = arrNumbers[i];
      }
    }
    resultElement.innerHTML = minNumber;
  };
  // función para el encontrar el segundo número menor
  const secondNumberHigher = () => {
    var arrMaxNumber = arrNumbers[0];
    var secondNumberHigher = arrNumbers[1];

    for (let i = 0;i < arrNumbers.length;i++) {
      if (arrNumbers[i] > arrMaxNumber) {
        arrMaxNumber = arrNumbers[i];
      }
    }

    for (let j = 0;j < arrNumbers.length;j++) {
      if (arrNumbers[j] !== arrMaxNumber && arrNumbers[j] > secondNumberHigher) {
        secondNumberHigher = arrNumbers[j];
      }
    }
    resultElement.innerHTML = secondNumberHigher;
  };
  // eventos para los buttons de la interfaz grafica
  buttonHigherNumber.addEventListener('click', higherNumber);
  buttonLessNumber.addEventListener('click', lessNumber);
  buttonSecondNumber.addEventListener('click', secondNumberHigher);
})();
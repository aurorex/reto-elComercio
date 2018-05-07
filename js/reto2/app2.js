(function() {
  const arrStrings = ['erik', 'leonardo', 'andresito', 'gerardo', 'jan', 'renzo'];

  const buttonCapitalLetter = document.getElementById('button-capital-letter');
  const buttonAscendingOrder = document.getElementById('button-ascending-order');
  
  const firstCapitalLetter = () => {
    var longWord = arrStrings[0];
    var newWord = []; 
    var capitalLetter = '';
    
    for(let i = 0;i < arrStrings.length; i++) {
      if(arrStrings[i].length > longWord.length) {
        longWord = arrStrings[i];
        capitalLetter = longWord[0].toUpperCase();
        longWord[1] === capitalLetter;
      } 
    }
    console.log(capitalLetter);
    console.log('la cadena más larga:' +capitalLetter+longWord);
  }

  const ascendingOrder = () => {
    var lastLetterAlfabet = arrStrings[0];
    var firstLetterAlfabet = arrStrings[0];

    for(let i = 0;i < arrStrings.length; i++) {
      if (arrStrings[i] >lastLetterAlfabet ){
        lastLetterAlfabet = arrStrings[i];
        console.log('ultima palabra del arreglo:'+ lastLetterAlfabet);
      }
      if (arrStrings[i] < firstLetterAlfabet){
        firstLetterAlfabet = arrStrings[i];
        console.log('primera palabra del arreglo:'+ firstLetterAlfabet);

      }
      // if(arrStrings[i] > lastLetterAlfabet ) {
      //   lastLetterAlfabet = arrStrings[i];
      // }
    }

    
    
  }

  buttonCapitalLetter.addEventListener('click', firstCapitalLetter);
  buttonAscendingOrder.addEventListener('click', ascendingOrder);

})()
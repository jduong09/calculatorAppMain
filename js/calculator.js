document.addEventListener('DOMContentLoaded', () => {
  const calculatorKeys = document.getElementsByClassName('calculator-key');
  const calculatorResult = document.getElementById('calculator-result');
  let newCalculatorResult, firstNum, secondNum, operation;

  for (let i = 0; i < calculatorKeys.length; i++) {
    const calculatorKey = calculatorKeys[i];

    calculatorKey.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log(parseInt(e.target.innerHTML));
      // When key is clicked, what do we need to do for making the calculator work.

      // Check if the first number has been set, if it hasn't then we need to check if it is a number of a operation.
      // if the first number has not been set and it is a number, then set the first number.
      if (!firstNum) {
        if (parseInt(e.target.innerHTML)) {
          firstNum = parseInt(e.target.innerHTML);
        } else {
          operation = e.target.innerHTML;
        }
      } else if (firstNum) {
        if (!operation) {
          firstNum = parseInt(e.target.innerHTML);
        }
      } else if (!operation) {
        if ((e.target.innerHTML === '+') || (e.target.innerHTML === '-') || (e.target.innerHTML === 'x') || (e.target.innerHTML === '/')) {
          operation = e.target.innerHTML;
        }
      } else {
        if (parseInt(e.target.innerHTML)) {
          secondNum = parseInt(e.target.innerHTML);
        } else {
          console.log('stop');
        }
      }

      // change calculator result to this potential number.
      // if first number has been selected, change it to first number.
      if (firstNum) {
        calculatorResult.innerHTML = firstNum;
      }


      if (firstNum && operation && secondNum) {
        console.log('nice');
      }
    });
  };
});
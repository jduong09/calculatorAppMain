document.addEventListener('DOMContentLoaded', () => {
  const numKeys = document.getElementsByClassName('num-key');
  const calculatorResult = document.getElementById('calculator-result');
  const enterKey = document.getElementById('enter-key');
  const deleteKey = document.getElementById('delete-key');
  const resetKey = document.getElementById('reset-key');
  let newCalculatorResult, firstNum, secondNum, operation;

  for (let i = 0; i < numKeys.length; i++) {
    const numKey = numKeys[i];

    numKey.addEventListener('click', (e) => {
      e.preventDefault();

      // Add if statement to reset variables
      if (newCalculatorResult) {
        firstNum = undefined; 
        secondNum = undefined;
        operation = undefined;
        newCalculatorResult = undefined;
      }
      // When key is clicked, what do we need to do for making the calculator work.

      // Check if the first number has been set, if it hasn't then we need to check if it is a number of a operation.
      // if the first number has not been set and it is a number, then set the first number.
      // if the first number has been set, and the clicked key is a number, then reset first number to new clicked number
      // if first number has been set and the clicked key is an operation, then set operation variable.
      // if first number has been set and operation has been set, we move on the second number.
      if (!firstNum) {
        if (parseInt(e.target.innerHTML)) {
          firstNum = e.target.innerHTML;
        } else if (e.target.innerHTML === '.') {
          firstNum = '.';
        }
      } else if (firstNum && !operation) {
        if ((e.target.innerHTML === '+') || (e.target.innerHTML === '-') || (e.target.innerHTML === 'x') || (e.target.innerHTML === '/')) {
          operation = e.target.innerHTML;
        } else {
          firstNum = `${firstNum}${e.target.innerHTML}`;
        }
      } else {
        if (!secondNum) {
          if ((e.target.innerHTML === '+') || (e.target.innerHTML === '-') || (e.target.innerHTML === 'x') || (e.target.innerHTML === '/')) {
            operation = e.target.innerHTML;
          } else if (parseInt(e.target.innerHTML)) {
            secondNum = e.target.innerHTML;
          } else if (e.target.innerHTML === '.') {
            secondNum = '.';
          }
        } else if (secondNum) {
          if (parseInt(e.target.innerHTML) || e.target.innerHTML === '.' || e.target.innerHTML === '0') {
            secondNum = `${secondNum}${e.target.innerHTML}`;
          }
        }
      }

      // change calculator result to this potential number.
      // if first number has been selected, change it to first number.
      if (firstNum && !secondNum) {
        calculatorResult.innerHTML = firstNum;
      } else if (operation && secondNum) {
        calculatorResult.innerHTML = secondNum;
      }
    });
  };

  enterKey.addEventListener('click', () => {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    switch (operation) {
      case '+':
        newCalculatorResult = firstNum + secondNum;
        break;
      case '-':
        newCalculatorResult = firstNum - secondNum;
        break;
      case 'x':
        newCalculatorResult = firstNum * secondNum;
        break;
      case '/':
        newCalculatorResult = firstNum / secondNum;
        break;
      default:
        newCalculatorResult = 0;
        break;
    }

    calculatorResult.innerHTML = newCalculatorResult;
  });

  deleteKey.addEventListener('click', (e) => {
    e.preventDefault();

    // if first number exists and no operation has been selected, then clicking delete key will remove from first num.
    if (newCalculatorResult) {
      firstNum = undefined;
      operation = undefined;
      secondNum = undefined;
      newCalculatorResult = undefined;
      calculatorResult.innerHTML = 0;
    } else if (firstNum && !operation) {
      firstNum = String(firstNum).slice(0, -1);
      
      calculatorResult.innerHTML = firstNum ? firstNum : 0;
    } else if (operation && !secondNum) {
    // if first number exists and an operation has been selected, then clicking delete key will remove the operation
      operation = undefined;
    } else if (secondNum) {
      // if second number exists, clicking delete key will remove from second number
      secondNum = String(secondNum).slice(0, -1);

      calculatorResult.innerHTML = secondNum ? secondNum : firstNum;
    } 
  });

  resetKey.addEventListener('click', (e) => {
    e.preventDefault();

    firstNum = undefined;
    operation = undefined;
    secondNum = undefined;
    newCalculatorResult = undefined;
    calculatorResult.innerHTML = 0;
  });
});
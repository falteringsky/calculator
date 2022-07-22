let leftOperand = '';
let righOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const resultBtn = document.getElementById('equalBtn');
const decimalBtn = document.getElementById('pointBtn');
const clearBtn = document.getElementById('clearBtn');
const backspaceBtn = document.getElementById('backspaceBtn');
const oldDisplay = document.getElementById('queueDisplay');
const currentDisplay = document.getElementById('currentDisplay');

resultBtn.addEventListener('click', operationResult);
// decimalBtn.addEventListener('click', pointDecimal);
clearBtn.addEventListener('click', clearAll);
backspaceBtn.addEventListener('click', deleteOne);

/*get button number selected into string*/
numberBtn.forEach((button) =>
    button.addEventListener('click', () =>
    getNumber(button.textContent))
);

/*get operator selected into string*/
operatorBtn.forEach((button) =>
    button.addEventListener('click', () =>
    getOperator(button.textContent))
);


function getNumber(number) {
    /*when shouldresetscreen true, run code below*/
    if (currentDisplay.textContent == '0' || shouldResetScreen) {
        resetDisplay();
    }
    currentDisplay.textContent += number;
     
}

function resetDisplay() {
    currentDisplay.textContent = '';
    shouldResetScreen = false;
}

function getOperator(operator) {
    if (currentOperation !== null) operationResult();
    leftOperand = currentDisplay.textContent;
    currentOperation = operator;
    oldDisplay.textContent = `${leftOperand} ${currentOperation}`;
    shouldResetScreen = true;
    currentDisplay.textContent = '0';
}

function clearAll() {
    currentDisplay.textContent = '0';
    oldDisplay.textContent = '';
    leftOperand = '';
    righOperand = '';
    currentOperation = null;
}

function deleteOne() {
    currentDisplay.textContent = currentDisplay.textContent.toString().slice(0, -1);
}

function operationResult() {
    /*when shouldresetscreen true, run code below*/
    if (shouldResetScreen || currentOperation == null) return
    if (currentOperation == '÷' && currentDisplay.textContent == '0') {
        alert('Cannot divide by 0');
        return
    }

    righOperand = currentDisplay.textContent;
    currentDisplay.textContent = roundResult(formula(currentOperation, leftOperand, righOperand));
    oldDisplay,textContent = `${leftOperand} ${currentOperation} ${righOperand} =`;
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function add(a, b) {
    return a + b;
  };
  
function subtract(a, b) {
      return a - b;
  };
  
function multiply(a, b) {
    return a * b;
  };

function divide(a, b) {
    return a / b;
};

  function formula(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
          return add(a, b)
        case '−':
          return substract(a, b)
        case '×':
          return multiply(a, b)
        case '÷':
          if (b === 0) return null
          else return divide(a, b)
        default:
          return null
      }
    }
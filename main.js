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
decimalBtn.addEventListener('click', pointDecimal);
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

}

function getOperator(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentDisplay.textContent
    currentOperation = operator
    oldDisplay.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
}

const add = function(a, b) {
    return a + b;
  };
  
const subtract = function(a, b) {
      return a - b;
  };
  
const multiply = function(a, b) {
    return a * b;
  };

const divide = function(a, b) {
    return a / b;
};

  function formula(operator, a, b) {
    a = number(a);
    b = number(b);

    if (operator == '+') {
        return add(a, b)
    }
    if (operator == '-') {
        return subtract(a, b)
    }    
    if (operator == 'x') {
        return multiply(a, b)
    }
    if (operator == '÷') {
        if(b == 0) {
            return null
        }
        else {
        return divide(a, b)
        }
    }
    else {
        return null
    }
  }
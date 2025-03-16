const input = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay(){
    input.value = displayValue;
}

function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);
    if (firstValue == null) {
        firstValue = value;
    }

    waitingForSecondValue = true;
    operator = nextOperator;
}

keys.addEventListener('click', function(event) {
    const element = event.target;

    if (!element.matches('button')) return;

    if(element.classList.contains('operator')) {

        return;
    }
    
    if(element.classList.contains('decimal')) {
        inputDecimal();
        updateDisplay();
        return;
    }
    
    if(element.classList.contains('clear')) {
        inputClear();
        updateDisplay();
        return;
    }

    inputNumber(element.value);
    updateDisplay();
});


function inputNumber(number) {
    if (waitingForSecondValue) {
        displayValue = number;
        waitingForSecondValue = false;
    } else {
        displayValue = displayValue=== '0' ? number:displayValue + number;
    }

}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

function inputClear() {
   displayValue = '0';
}

function calculate() {
    
}
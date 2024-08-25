let display = document.getElementById('display');
let currentInput = '';
let lastInput = '';
let operator = null;

function appendNumber(number) {
    if (currentInput === '0' && number === '0') return; // Prevents multiple leading zeros
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '' && lastInput === '') return;
    if (currentInput !== '') {
        if (operator !== null) {
            calculate();
        }
        lastInput = currentInput;
        currentInput = '';
    }
    operator = op;
    updateDisplay();
}

function calculate() {
    if (operator === null || currentInput === '') return;
    let result;
    const prev = parseFloat(lastInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    lastInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    lastInput = '';
    operator = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || lastInput || '0';
}

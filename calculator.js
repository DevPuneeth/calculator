let operator = '';
let num1 = '';
let num2 = '';
let currentInput = '';
function numFunction(m) {
if (operator === '' && currentInput !== '0') {
    num1 += m;
    currentInput = num1;
} else {
    num2 += m;
    currentInput = num1 + operator + num2;
}
document.querySelector('.js-number').value = currentInput || '0';
}

function symFunction(op) {
    if (num1 === '' && op === '-') {
        num1 = '-';
        currentInput = num1;
    } else if (num1 !== '') {
        if (num2 !== '') {
            calculation(); 
        }
        operator = op;
        currentInput = num1 + operator;
    }
    document.querySelector('.js-number').value = currentInput;
    
}

function dotFunction() {
    if (operator === '') {
        if (!num1.includes('.')) {
            num1 += (num1 === '') ? '0.' : '.';
            currentInput = num1;
        }
    } else {
        if (!num2.includes('.')) {
            num2 += (num2 === '') ? '0.' : '.';
            currentInput = num1 + operator + num2;
        }
    }
    document.querySelector('.js-number').value = currentInput;
     
}

function calculation() {
let result = '';
if (num1 !== '' && num2 !== '' && operator !== '') {
    switch (operator) {
        case '+':
            result = Number(num1) + Number(num2);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;
        case '*':
            result = Number(num1) * Number(num2);
            break;
        case '/':
            if (Number(num2) === 0) {
                alert("Cannot divide by zero!");
                result = num1; // Keep num1 as the value
            } else {
                result = Number(num1) / Number(num2);
            }
            break;
    }
    document.querySelector('.js-number').value = result;
    num1 = result; // Allow chaining calculations
    num2 = ''; 
    operator = ''; 
}
}


function backspaceFunction() {
    if (operator === '') {
        num1 = num1.slice(0, -1);
        currentInput = num1;
    } else if (num2 === '') {
        operator = '';
        currentInput = num1;
    } else {
        num2 = num2.slice(0, -1);
        currentInput = num1 + operator + num2;
    }
    document.querySelector('.js-number').value = currentInput || '0';
}
function reset() {
document.querySelector('.js-number').value = '0';
num1 = '';
num2 = '';
operator = '';
currentInput = '';
}


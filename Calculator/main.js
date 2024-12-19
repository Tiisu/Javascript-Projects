let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let currentValue = '0';
let operator = null;
let previousValue = null;
let newNumber = true;

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Handle number inputs
        if (!isNaN(value) || value === '.') {
            if (newNumber) {
                currentValue = value === '.' ? '0.' : value;
                newNumber = false;
            } else {
                if (value === '.' && currentValue.includes('.')) return;
                currentValue += value;
            }
            display.value = currentValue;
        }
        // Handle operators
        else if (['+', '-', '*', '/'].includes(value)) {
            if (previousValue === null) {
                previousValue = parseFloat(currentValue);
            } else if (!newNumber) {
                previousValue = calculate(previousValue, parseFloat(currentValue), operator);
                display.value = previousValue;
            }
            operator = value;
            newNumber = true;
        }
        // Handle clear button
        else if (value === 'CLR') {
            currentValue = '0';
            operator = null;
            previousValue = null;
            newNumber = true;
            display.value = currentValue;
        }
    });
});

// Calculate function
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        case '^':
            return Math.pow(a, b);
        case 'sin':
            return Math.sin(a);
        case 'cos':
            return Math.cos(a);
        case 'tan':
            return Math.tan(a);
        case 'log':
            return Math.log(a);
        case 'sqrt':
            return Math.sqrt(a);
        case 'x!':
            return factorial(a);
        case 'x^y':
            return Math.pow(a, b);
        case '1/x':
            return 1 / a;
        case 'e^x':
            return Math.exp(a);
        case '10^x':
            return Math.pow(10, a);
        default:
            return b;
    }
}

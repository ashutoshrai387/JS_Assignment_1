// Event listeners for calculate and clear buttons
document.getElementById('calculateButton').addEventListener('click', calculate);
document.getElementById('clearButton').addEventListener('click', clearFields);

// Function to perform calculation
function calculate() {
    // Getting input values
    var num1 = document.getElementById('num1').value.trim();
    var num2 = document.getElementById('num2').value.trim();
    var operator = document.getElementById('operator').value;
    var result;

    // Error handling for empty input fields
    if (num1 === '' || num2 === '') {
        document.getElementById('result').value = "Please enter values for both numbers.";
        return;
    }

    // Parsing input values to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Creating expression string
    var expression = num1 + " " + operator + " " + num2;
    document.getElementById('expression').value = expression;

    // Performing calculation based on the operator
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operator";
    }

    // Displaying result
    document.getElementById('result').value = result;
}

// Function to clear input fields
function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').selectedIndex = 0;
    document.getElementById('expression').value = '';
    document.getElementById('result').value = '';
}

// Functions for arithmetic operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}
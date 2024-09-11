// JavaScript for Calculator Functionality

// Selecting the display element
const display = document.getElementById('display');

/**
 * Function to append number to the display
 * @param {number} number
 */
function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

/**
 * Function to append operator to the display
 * @param {string} operator
 */
function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    // Prevent adding multiple operators
    if (isNaN(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

/**
 * Function to append decimal dot
 */
function appendDot() {
    if (!display.innerText.includes('.')) {
        display.innerText += '.';
    }
}

/**
 * Function to calculate and display the result
 */
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}

/**
 * Function to clear the display
 */
function clearDisplay() {
    display.innerText = '0';
}

/**
 * Function to delete the last character from the display
 */
function deleteLast() {
    if (display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}
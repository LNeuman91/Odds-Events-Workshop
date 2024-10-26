// Input field and buttons
const numberInput = document.getElementById('number-input');
const addButton = document.getElementById('add-button');
const sortOneButton = document.getElementById('sort-one-button');
const sortAllButton = document.getElementById('sort-all-button');

// Display areas
const numberBankDisplay = document.getElementById('number-bank');
const oddsDisplay = document.getElementById('odds-display');
const evensDisplay = document.getElementById('evens-display');

// State variables
const numberBank = [];
const odds = [];
const evens = [];

// Event listener for adding a number to the number bank
addButton.addEventListener('click', () => {
    const value = numberInput.value;
    // Check if the input is a numeric value
    if (!isNaN(value) && value.trim() !== '') {
        const number = parseInt(value, 10);
        numberBank.push(number);
        updateNumberBankDisplay();
        numberInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid number');
    }
});

// Event listener for sorting the first number in the bank
sortOneButton.addEventListener('click', () => {
    if (numberBank.length > 0) {
        const number = numberBank.shift(); // Remove the first number
        if (number % 2 === 0) {
            evens.push(number);
        } else {
            odds.push(number);
        }
        updateDisplays();
    } else {
        alert('No numbers to sort!');
    }
});

// Event listener for sorting all numbers in the bank
sortAllButton.addEventListener('click', () => {
    while (numberBank.length > 0) {
        const number = numberBank.shift();
        if (number % 2 === 0) {
            evens.push(number);
        } else {
            odds.push(number);
        }
    }
    updateDisplays();
});

// Function to update the number bank display
function updateNumberBankDisplay() {
    numberBankDisplay.textContent = numberBank.join(', ');
}

// Function to update the odd and even displays
function updateDisplays() {
    updateNumberBankDisplay();
    oddsDisplay.textContent = odds.join(', ');
    evensDisplay.textContent = evens.join(', ');
}
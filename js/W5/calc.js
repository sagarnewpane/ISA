// Select all button elements and store them in the `buttons` variable
const buttons = document.querySelectorAll('button');
// Select the display and output elements by their IDs 
const display = document.querySelector('#display');
const output = document.querySelector('#output');
// Initialize variables required for calculations
let firstOperand = NaN;
let secondOperand = NaN;
let operator = null;
let clickedEquals = false;

// Function takes a value and displays it in the `display` element on the page
function displayValue(value) {
  display.value += value;
}

// Function clears the `display` element and resets all variables to their initial values
function clearScreen() {
  display.value = '';
  firstOperand = NaN;
  secondOperand = NaN;
  operator = null;
} 

// Function calculates the value by performing action on operands using operator
function calculate() { 

  if(isNaN(firstOperand)){ // Check if firstOperand is empty, if empty store the value there
    firstOperand = display.value;
    display.value =''; // set the display value to ''
  }

  else if(!isNaN(firstOperand) && isNaN(secondOperand)){ // Check if secondOperand is empty, if empty store the value there
    secondOperand = display.value;
    display.value =''; // set the display value to ''
  }

  if(!isNaN(firstOperand) && !isNaN(secondOperand) && operator !== null){ // Check if operands and operator are present, if yes perform operation
    switch(operator){
      case '+':
        firstOperand = Number(firstOperand) + Number(secondOperand);
        display.value = firstOperand; 
        secondOperand = NaN;
        operator = null;
        return 'calculated'
      
      case '-':
        firstOperand = Number(firstOperand) - Number(secondOperand);
        display.value = firstOperand;
        secondOperand = NaN;
        operator = null;
        return 'calculated'

      case '*':
        firstOperand = Number(firstOperand) * Number(secondOperand);
        display.value = firstOperand;
        secondOperand = NaN;
        operator = null;
        return 'calculated'
      
      case '/':
        firstOperand = Number(firstOperand) / Number(secondOperand);
        display.value = firstOperand;
        secondOperand = NaN;
        operator = null;
        return 'calculated'
    }  
  }
}

// Add an event listener to each button that listens for a click event
buttons.forEach((button) => {
  button.addEventListener('click', () => {

    if(button.value){
      if(clickedEquals){
        display.value = '';
        clickedEquals=false;
    }
      displayValue(button.value);
    }

    else if (button.id === 'addButton'){
      if(calculate() == 'calculated'){
        display.value = '';
      }
      operator = '+'; 
    }
    else if (button.id === 'subtractButton'){
      if(calculate() == 'calculated'){
        display.value = '';
      }
      operator = '-';
    }
    else if (button.id === 'multiplyButton'){
      if(calculate() == 'calculated'){
        display.value = '';
      }
      operator = '*';
    }
    else if (button.id === 'divideButton'){
      if(calculate() == 'calculated'){
        display.value = '';
      }
      operator = '/';
    }

    // Call the calculate function when the button is pressed
    else if (button.id === 'equalsButton'){
      calculate()
      clickedEquals = true;
      firstOperand = NaN;
      operator = null;
    }
    
    // Call the clearScreen function when the button is pressed
    else if (button.id === 'clearButton'){clearScreen()}
    
  });
});
 
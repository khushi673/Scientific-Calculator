var screen=document.querySelector('#screen');
    var btn=document.querySelectorAll(".btn");
    
    
    for(items of btn)
    {
        items.addEventListener('click',(e)=>{
            console.log("click");
            
            btntext=e.target.innerText;
            if (btntext == '*') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value+=btntext;
        });
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function pi() {
        if (Number(screen.value)) {
                screen.value = (Math.PI);
            }
            else {
                screen.value += Math.PI;
            }
    }

    function e() {
        screen.value = 2.71828182846;
    }
    function pow() {
        screen.value = Math.pow(screen.value, y);
    }

    function xTothePowertwo(){
        screen.value = Math.pow(Number(screen.value),2)
    }

    function xInverse(){
        screen.value = (1 / (Number(screen.value)))
    }

    function modulus(){
        screen.value = Math.abs(Number(screen.value))
    }
 function xTothePowerthree(value){
    switch(value){
    case 'x^3': {
        screen.value = Math.pow(Number(screen.value), 3);
        break;
    }
}
 }

 function cubert(value){
    switch(value){
    case 'cubeRoot': {
        screen.value = Math.pow(Number(screen.value), 0.3334).toFixed(1);
        break;
    }
}
 }

 

 function tenPowerx(value){
    switch(value){
      case '10powerx': {
        screen.value = Math.pow(10, Number(screen.value)).toString();
    }
}
 }

 function twoTothePowerx(value){
    switch(value){
        case 'twoTothePowerx': {
            screen.value = Math.pow(2, Number(screen.value)).toString();
        }
    }
 }
 function ePowerx(value){
    switch(value){
 case 'ePowerx': {
    screen.value = Math.exp(Number(screen.value)).toString();
    break;
}
    }
}

 


  
  // Function to calculate 10^x
  function tenPowerx() {
    const screen = document.getElementById("screen");
    const x = Number(screen.value); // Expecting a single number on the screen
    if (isNaN(x)) {
      screen.value = "Error: Enter a valid number";
      return;
    }
    const result = Math.pow(10, x);
    screen.value = result;
  }
  
  // Function to calculate log(x)
  function log() {
    const screen = document.getElementById("screen");
    const x = Number(screen.value); // Expecting a single number on the screen
    if (x <= 0 || isNaN(x)) {
      screen.value = "Error: Log undefined for x <= 0";
      return;
    }
    const result = Math.log10(x);
    screen.value = result;
  }
  
  // Helper function to convert degrees to radians
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  
  // Helper function to get the current angle mode (DEG or RAD)
  function isDegreeMode() {
    const degreeButton = document.getElementById("degree");
    return degreeButton.value === "deg";
  }
  
  // Trigonometric functions
  
  function sin() {
    const screen = document.getElementById("screen");
    const x = Number(screen.value);
    if (isNaN(x)) {
      screen.value = "Error: Enter a valid number";
      return;
    }
    const angle = isDegreeMode() ? degreesToRadians(x) : x;
    const result = Math.sin(angle);
    screen.value = result;
  }
  
  function cos() {
    const screen = document.getElementById("screen");
    const x = Number(screen.value);
    if (isNaN(x)) {
      screen.value = "Error: Enter a valid number";
      return;
    }
    const angle = isDegreeMode() ? degreesToRadians(x) : x;
    const result = Math.cos(angle);
    screen.value = result;
  }
  
  function tan() {
    const screen = document.getElementById("screen");
    const x = Number(screen.value);
    if (isNaN(x)) {
      screen.value = "Error: Enter a valid number";
      return;
    }
    const angle = isDegreeMode() ? degreesToRadians(x) : x;
    const result = Math.tan(angle);
    screen.value = result;
  }
  
  function cot() {
    const screen = document.getElementById("screen");
    const x = Number(screen.value);
    if (isNaN(x)) {
      screen.value = "Error: Enter a valid number";
      return;
    }
    const angle = isDegreeMode() ? degreesToRadians(x) : x;
    const tanValue = Math.tan(angle);
    if (tanValue === 0) {
      screen.value = "Error: Undefined (tan = 0)";
      return;
    }
    const result = 1 / tanValue;
    screen.value = result;
  }
  
  function sec() {
    const screen = document.getElementById("screen");
    const x = Number(screen.value);
    if (isNaN(x)) {
      screen.value = "Error: Enter a valid number";
      return;
    }
    const angle = isDegreeMode() ? degreesToRadians(x) : x;
    const cosValue = Math.cos(angle);
    if (cosValue === 0) {
      screen.value = "Error: Undefined (cos = 0)";
      return;
    }
    const result = 1 / cosValue;
    screen.value = result;
  }
  
  function csc() {
    const screen = document.getElementById("screen");
    const x = Number(screen.value);
    if (isNaN(x)) {
      screen.value = "Error: Enter a valid number";
      return;
    }
    const angle = isDegreeMode() ? degreesToRadians(x) : x;
    const sinValue = Math.sin(angle);
    if (sinValue === 0) {
      screen.value = "Error: Undefined (sin = 0)";
      return;
    }
    const result = 1 / sinValue;
    screen.value = result;
  }
  
 
 
 function functions(value){
    switch(value){
        case 'floor': {
            screen.value = Math.floor(Number(screen.value));
            break;
        }
        case 'ceil': {
            screen.value = Math.ceil(Number(screen.value));
            break;
        }
        case 'rand': {
            screen.value = Math.random();
            break;
        }
    }
 }

   function factorial(value){
    switch(value){
        case 'factorial': {
            var number = Number(screen.value);
            if (number == 0 || number == 1) {
                screen.value = "1";
            }
            else if (number > 1) {
                for (var i = number - 1; i > 1; i--) {
                    number = number * i;
                }
                screen.value = number.toString();
            }
        }
    }
    }
    
    let   ToggleValue=1;
    function deg(value) {
   switch(value){
    case 'deg': {
        
            if (ToggleValue == 1) {           
             document.querySelector('#degree').innerHTML = "RAD";
                ToggleValue = 0;
            }
            else {
                document.querySelector('#degree').innerHTML = "DEG";
                ToggleValue = 1;
            }
        }
}
    }
 
    function fe(value) {
   switch(value){
    case 'fe': {
            if (ToggleValue == 1) {
                screen.value = Number(screen.value);
                ToggleValue = 0;
            }
            else {
                screen.value = Number(screen.value).toExponential();
                ToggleValue = 1;
            }
            break;
        }
        default: {
            screen.value += 0;
        }
   }
}
 
// Initialize memory storage
let memoryValue = 0;

// Clear Memory (MC)
function mc() {
  memoryValue = 0;
  updateMemoryButtons();
}

// Recall Memory (MR)
function mr() {
  const screen = document.getElementById("screen");
  screen.value = memoryValue;
}

// Store Memory (MS)
function ms() {
  const screen = document.getElementById("screen");
  const currentValue = parseFloat(screen.value);
  if (!isNaN(currentValue)) {
    memoryValue = currentValue;
    updateMemoryButtons();
  } else {
    screen.value = "Error"; // Handle invalid input
  }
}

// Add to Memory (M+)
function memoryadd() {
  const screen = document.getElementById("screen");
  const currentValue = parseFloat(screen.value);
  if (!isNaN(currentValue)) {
    memoryValue += currentValue;
    updateMemoryButtons();
  } else {
    screen.value = "Error"; // Handle invalid input
  }
}

// Subtract from Memory (M-)
function memorysubtract() {
  const screen = document.getElementById("screen");
  const currentValue = parseFloat(screen.value);
  if (!isNaN(currentValue)) {
    memoryValue -= currentValue;
    updateMemoryButtons();
  } else {
    screen.value = "Error"; // Handle invalid input
  }
}

// Update Memory Buttons (MC and MR)
function updateMemoryButtons() {
  const mcButton = document.getElementById("clear");
  const mrButton = document.getElementById("recall");

  if (memoryValue !== 0) {
    mcButton.disabled = false;
    mrButton.disabled = false;
  } else {
    mcButton.disabled = true;
    mrButton.disabled = true;
  }
}

// Ensure memory buttons are initialized correctly
document.addEventListener("DOMContentLoaded", () => {
  updateMemoryButtons();
});


    function changeSign() {
	if(screen.value.substring(0, 1) == "-")
		screen.value = itesm.value.substring(1, screen.value.length)
	else
		screen.value = "-" + screen.value
    }

    function ln() {
	screen.value = Math.log(screen.value);
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }


    // ////////////////////////////////////
    
 // Get references to the primary and secondary displays
const primaryScreen = document.getElementById("screen");
const secondaryScreen = document.getElementById("secondary-screen");

// Variables to track the input and operation
let operation = "";
let x = null;
let y = null;

// Update the secondary display
function updateSecondaryDisplay(value) {
  secondaryScreen.textContent = value;
}

// Handle button clicks for operations
function xToThePowerY() {
  x = parseFloat(primaryScreen.value); // Capture the first value (x)
  if (!isNaN(x)) {
    operation = "power";
    updateSecondaryDisplay(`${x}^`); // Show x^ in the secondary display
    primaryScreen.value = ""; // Clear input for the second value (y)
  }
}

function yRootX() {
  x = parseFloat(primaryScreen.value); // Capture the first value (x)
  if (!isNaN(x)) {
    operation = "root";
    updateSecondaryDisplay(`y√${x}`); // Show y√x in the secondary display
    primaryScreen.value = ""; // Clear input for the second value (y)
  }
}

function logBaseY() {
  x = parseFloat(primaryScreen.value); // Capture the first value (x)
  if (!isNaN(x)) {
    operation = "log";
    updateSecondaryDisplay(`log base y of ${x}`); // Show log base y of x in the secondary display
    primaryScreen.value = ""; // Clear input for the second value (y)
  }
}

// Perform the calculation on "=" button click
function calculate() {
  y = parseFloat(primaryScreen.value); // Capture the second value (y)

  if (!isNaN(x) && !isNaN(y)) {
    let result = 0;

    if (operation === "power") {
      result = Math.pow(x, y); // Calculate x^y
      updateSecondaryDisplay(`${x}^${y}`); // Update secondary display with x^y
    } else if (operation === "root") {
      if (y === 0) {
        primaryScreen.value = "Error"; // Cannot calculate 0th root
        return;
      }
      result = Math.pow(x, 1 / y); // Calculate y√x
      updateSecondaryDisplay(`${y}√${x}`); // Update secondary display with y√x
    } else if (operation === "log") {
      if (x <= 0 || y <= 0 || y === 1) {
        primaryScreen.value = "Error"; // Invalid log inputs
        return;
      }
      result = Math.log(x) / Math.log(y); // Calculate log base y of x
      updateSecondaryDisplay(`log base ${y} of ${x}`); // Update secondary display with log base y of x
    }

    primaryScreen.value = result; // Display the result in the primary screen
    reset(); // Reset variables
  } else {
    primaryScreen.value = "Error"; // Error if inputs are invalid
  }
}

// Clear the screen
function clearScreen() {
  primaryScreen.value = "";
  secondaryScreen.textContent = "0";
  reset();
}

// Reset variables
function reset() {
  operation = "";
  x = null;
  y = null;
}

// Handle real-time updates for the secondary display during input
primaryScreen.addEventListener("input", () => {
  if (operation === "power") {
    updateSecondaryDisplay(`${x}^${primaryScreen.value}`);
  } else if (operation === "root") {
    updateSecondaryDisplay(`${primaryScreen.value}√${x}`);
  } else if (operation === "log") {
    updateSecondaryDisplay(`log base ${primaryScreen.value} of ${x}`);
  }
});

    // ////////////////////////
    // Updates the primary screen with the input
    function updateScreen(value) {
      const primaryScreen = document.getElementById("screen");
      primaryScreen.value += value;
    }
    
    // Display an error message
    function showErrorMessage(message) {
      const secondaryScreen = document.getElementById("secondary-screen");
      secondaryScreen.innerText = message;
    }
    
    // Calculate x^y
    function xTothePowery() {
      const primaryScreen = document.getElementById("screen");
      const secondaryScreen = document.getElementById("secondary-screen");
      const input = primaryScreen.value.split("^");
    
      if (input.length === 2) {
        const base = parseFloat(input[0]);
        const exponent = parseFloat(input[1]);
        const result = Math.pow(base, exponent);
    
        primaryScreen.value = result;
        secondaryScreen.innerText = `${base} ^ ${exponent} =`;
      } else {
        showErrorMessage("Invalid format. Use x^y");
      }
    }
    
    // Calculate y-th root of x
    function xRooty() {
      const primaryScreen = document.getElementById("screen");
      const secondaryScreen = document.getElementById("secondary-screen");
      const input = primaryScreen.value.split("root");
    
      if (input.length === 2) {
        const root = parseFloat(input[0]);
        const number = parseFloat(input[1]);
        if (number >= 0 && root !== 0) {
          const result = Math.pow(number, 1 / root);
    
          primaryScreen.value = result;
          secondaryScreen.innerText = `${root}√${number} =`;
        } else {
          showErrorMessage("Root must be positive.");
        }
      } else {
        showErrorMessage("Invalid format. Use yrootx");
      }
    }
    
    // Calculate log_y(x)
    function logy() {
      const primaryScreen = document.getElementById("screen");
      const secondaryScreen = document.getElementById("secondary-screen");
      const input = primaryScreen.value.split("log");
    
      if (input.length === 2) {
        const base = parseFloat(input[0]);
        const number = parseFloat(input[1]);
        if (base > 0 && base !== 1 && number > 0) {
          const result = Math.log(number) / Math.log(base);
    
          primaryScreen.value = result;
          secondaryScreen.innerText = `log_${base}(${number}) =`;
        } else {
          showErrorMessage("Base > 0, Base ≠ 1, Number > 0");
        }
      } else {
        showErrorMessage("Invalid format. Use blogx");
      }
    }
    
    // Clear the screen
    function clearScreen() {
      const primaryScreen = document.getElementById("screen");
      const secondaryScreen = document.getElementById("secondary-screen");
    
      primaryScreen.value = "";
      secondaryScreen.innerText = "0";
      lastResult = null;
      isChaining = false;
    }
    
    // Evaluate the expression
    function calculate() {
      const primaryScreen = document.getElementById("screen");
      const secondaryScreen = document.getElementById("secondary-screen");
      const input = primaryScreen.value;
    
      try {
        const result = eval(input);
        primaryScreen.value = result;
        secondaryScreen.innerText = `${input} =`;
        lastResult = result;
        isChaining = true;
      } catch (error) {
        primaryScreen.value = "";
        secondaryScreen.innerText = "Invalid Input";
        isChaining = false;
      }
    }
    
    // Additional functions
    function sqrt() {
      const primaryScreen = document.getElementById("screen");
      const secondaryScreen = document.getElementById("secondary-screen");
      const value = parseFloat(primaryScreen.value);
    
      if (value >= 0) {
        const result = Math.sqrt(value);
        primaryScreen.value = result;
        secondaryScreen.innerText = `√${value} =`;
      } else {
        showErrorMessage("Cannot calculate √ of negative.");
      }
    }
    
    function ln() {
      const primaryScreen = document.getElementById("screen");
      const secondaryScreen = document.getElementById("secondary-screen");
      const value = parseFloat(primaryScreen.value);
    
      if (value > 0) {
        const result = Math.log(value);
        primaryScreen.value = result;
        secondaryScreen.innerText = `ln(${value}) =`;
      } else {
        showErrorMessage("ln(x) requires x > 0");
      }
    }
    
    function log() {
      const primaryScreen = document.getElementById("screen");
      const secondaryScreen = document.getElementById("secondary-screen");
      const value = parseFloat(primaryScreen.value);
    
      if (value > 0) {
        const result = Math.log10(value);
        primaryScreen.value = result;
        secondaryScreen.innerText = `log(${value}) =`;
      } else {
        showErrorMessage("log(x) requires x > 0");
      }
    }
    
    function factorial() {
      const primaryScreen = document.getElementById("screen");
      const secondaryScreen = document.getElementById("secondary-screen");
      const value = parseInt(primaryScreen.value, 10);
    
      if (value >= 0) {
        let result = 1;
        for (let i = 1; i <= value; i++) {
          result *= i;
        }
        primaryScreen.value = result;
        secondaryScreen.innerText = `${value}! =`;
      } else {
        showErrorMessage("Factorial is not defined for negative numbers.");
      }
    }
    
   // Function to toggle between view_1 and view_2
function toggleView() {
    const view1Buttons = document.querySelectorAll('.view_1');
    const view2Buttons = document.querySelectorAll('.view_2');
  
    // to check if view_1 buttons are currently visible
    const isView1Visible = Array.from(view1Buttons).some(button => button.style.display !== 'none');
  
    if (isView1Visible) {
      // to hide view_1 and show view_2
      view1Buttons.forEach(button => button.style.display = 'none');
      view2Buttons.forEach(button => button.style.display = 'inline-block');
    } else {
      //to  hide view_2 and show view_1
      view2Buttons.forEach(button => button.style.display = 'none');
      view1Buttons.forEach(button => button.style.display = 'inline-block');
    }
  }
  
  //to  set the default state when the page loads
  window.onload = function() {
    const view1Buttons = document.querySelectorAll('.view_1');
    const view2Buttons = document.querySelectorAll('.view_2');
  
    // Show view_1 by default
    view1Buttons.forEach(button => button.style.display = 'inline-block');
    view2Buttons.forEach(button => button.style.display = 'none');
  };
  
      

// ///////////////////////////////////////////


function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    // Toggle the display between 'grid' and 'none'
    if (dropdownMenu.style.display === 'grid') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'grid';
    }
  }
  
  // Close the dropdown when clicking outside
  window.addEventListener('click', function (event) {
    const dropdownContainer = document.querySelector('.dropdown-container');
    const dropdownMenu = document.getElementById('dropdown-menu');
  
    if (!dropdownContainer.contains(event.target)) {
      dropdownMenu.style.display = 'none';
    }
  });


//   //////////////////////////////

      function toggleFunction() {
        const functionMenu = document.getElementById('function-menu');
        
        // to toggle the 'hidden' class to show or hide the dropdown
        if (functionMenu.classList.contains('hidden')) {
          functionMenu.classList.remove('hidden'); // Show the menu
        } else {
          functionMenu.classList.add('hidden'); // Hide the menu
        }
      }
      
      // to close the menu when clicking outside
      window.addEventListener('click', function (event) {
        const dropdownContainer = document.querySelector('.dropdown-container_two');
        const functionMenu = document.getElementById('function-menu');
      
        // to enable If the click is outside the dropdown container, hide the menu
        if (!dropdownContainer.contains(event.target)) {
          functionMenu.classList.add('hidden');
        }
      });
      

    //   /////////////////////////
    let lastOperand = null;
let lastOperator = null;
let lastResult = null;

// Function to handle calculations
function calculate() {
  const primaryScreen = document.getElementById("screen");
  const secondaryScreen = document.getElementById("secondary-screen");

  try {
    const input = primaryScreen.value;

    // Evaluate the expression
    const result = eval(input);

    // Update secondary display with full equation
    secondaryScreen.innerText = input;

    // Update the primary display with the result
    primaryScreen.value = result;

    // Store the last operation for repeated "=" functionality
    const match = input.match(/([+\-*/])\s*([\d.]+)$/);
    if (match) {
      lastOperator = match[1];
      lastOperand = parseFloat(match[2]);
    }

    lastResult = result; // Store the result
  } catch (err) {
    primaryScreen.value = "Error"; // Handle invalid input
    secondaryScreen.innerText = "Error";
  }
}

// Clear both displays and stored variables
function clearScreen() {
  const primaryScreen = document.getElementById("screen");
  const secondaryScreen = document.getElementById("secondary-screen");

  // Reset screens
  primaryScreen.value = "";
  secondaryScreen.innerText = "0";

  // Reset stored operations
  lastOperand = null;
  lastOperator = null;
  lastResult = null;
}


///////////////////////////////

let currentInput = ""; // Stores the current input expression
let isChaining = false; // Indicates if we are chaining calculations

// Function to handle calculations
function calculate() {
  const primaryScreen = document.getElementById("screen");
  const secondaryScreen = document.getElementById("secondary-screen");

  currentInput = primaryScreen.value; // Get the current input from the primary screen

  try {
    if (isChaining && lastResult !== null && lastOperator && lastOperand !== null) {
      // If chaining, continue calculation with last result, operator, and operand
      const equation = `${lastResult} ${lastOperator} ${lastOperand}`;
      lastResult = eval(equation); // Perform the calculation
      primaryScreen.value = lastResult;
      secondaryScreen.innerText = equation; // Display the full equation in the secondary screen
    } else {
      // Perform the first calculation or normal calculation
      const result = eval(currentInput);
      secondaryScreen.innerText = currentInput; // Display the full equation in the secondary screen
      primaryScreen.value = result; // Display the result in the primary screen
      lastResult = result; // Store the result

      // Extract the last operator and operand for chaining
      const match = currentInput.match(/([+\-*/])\s*([\d.]+)$/);
      if (match) {
        lastOperator = match[1];
        lastOperand = parseFloat(match[2]);
      } else {
        lastOperator = null;
        lastOperand = null;
      }
    }

    isChaining = true; // Enable chaining mode
  } catch (error) {
    primaryScreen.value = "Error"; // Handle invalid input
    secondaryScreen.innerText = "Error"; // Show error message in secondary screen
    clearStoredOperations(); // Clear stored operations
  }
}

// Reset behavior for new calculations after "="
function handleNewInput() {
  const primaryScreen = document.getElementById("screen");

  if (isChaining) {
    // If chaining mode is active, reset for a new calculation
    primaryScreen.value = ""; // Clear input
    isChaining = false; // Disable chaining mode
    clearStoredOperations(); // Clear stored operations
  }
}

// Clear both displays and stored variables
function clearScreen() {
  const primaryScreen = document.getElementById("screen");
  const secondaryScreen = document.getElementById("secondary-screen");

  primaryScreen.value = ""; // Clear primary display
  secondaryScreen.innerText = ""; // Clear secondary display (equation display)
  clearStoredOperations(); // Clear stored operations
}

// Clear stored operations
function clearStoredOperations() {
  lastResult = null;
  lastOperator = null;
  lastOperand = null;
  isChaining = false;
}

// Event listener to reset behavior on new input
document.getElementById("screen").addEventListener("input", handleNewInput);



// /////////////////////
primaryScreen.addEventListener("input", () => {
  if (!operation || x === null) {
    // Do nothing if the operation or x is not set
    return;
  }

  const y = primaryScreen.value; // Read the current input
  if (operation === "power") {
    updateSecondaryDisplay(`${x}^${y}`);
  } else if (operation === "root") {
    updateSecondaryDisplay(`${y}√${x}`);
  } else if (operation === "log") {
    updateSecondaryDisplay(`log base ${y} of ${x}`);
  }
});

  

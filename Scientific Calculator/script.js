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

    function log() {
        screen.value = Math.log(screen.value);
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

    function xTothePowery(){
        screen.value = Math.pow(Number(screen.value),)
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

 function xTothePowery(x,y){
        return x ** y;  // Returns x raised to the power of y
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

 function logy(value) {
    var m = value.search("logy");
    var n = value.substring(0, m);
    var o = value.substring(m + 4, value.length);
    return [o, n];
}

 function trigo(value){
    switch(value){
        case 'sin': {
            if (ToggleValue == 1) {
                screen.value = (Math.sin((Math.PI / 180) * Number(screen.value)));
            }
            else {
                screen.value = (Math.sin(Number(screen.value)));
            }
            break;
        }
        case 'cos': {
            if (ToggleValue) {
                screen.value = (Math.sin((Math.PI / 180) * Number(screen.value)));
            }
            else {
                screen.value = (Math.sin(Number(screen.value)));
            }
            break;
        }
        case 'tan': {
            if (ToggleValue) {
                screen.value = (Math.sin((Math.PI / 180) * Number(screen.value)));
            }
            else {
                screen.value = (Math.sin(Number(screen.value)));
            }
            break;
        }
        case 'cosec': {
            if (ToggleValue) {
                screen.value = (1 / Math.sin(Math.PI / 180 * Number(screen.value)));
            }
            else {
                screen.value = (1 / Math.sin(Number(screen.value)));
            }
            break;
        }
        case 'sec': {
            if (ToggleValue) {
                screen.value = (1 / Math.cos(Math.PI / 180 * Number(screen.value)));
            }
            else {
                screen.value = (1 / Math.cos(Number(screen.value)));
            }
            break;
        }
        case 'cot': {
            if (ToggleValue) {
                screen.value = (1 / (Math.tan(Math.PI / 180 * Number(screen.value))));
            }
            else {
                screen.value = (1 / Math.tan(Number(screen.value)));
            }
            break;
        }
    }
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


function ToggleClearandRecall() {
    document.getElementById('clear').disabled = false;
    document.getElementById('recall').disabled = false;
}

        var memoryStack = [];
         function mc(value){
         switch(value){
         case 'memoryClear': {
            memoryStack = [];
            break;
        }
    }
}

        function mr(value){
            switch(value){
        case 'memoryRecall': {
            screen.value = memoryStack[memoryStack.length - 1];
            break;
        }
    }
}

function memoryAdd(value){
    switch(value){

        case 'memoryAdd': {
            ToggleClearandRecall();
            if (memoryStack.length == 1) {
                memoryStack.push(parseInt(screen.value));
            }
            else {
                memoryStack[memoryStack.length - 1] += parseInt(screen.value);
            }
            break;
        }
    }
        }


         function memorySubtract(value){
            switch(value){
        case 'memorySubtract': {
            ToggleClearandRecall();
            if (memoryStack.length == 0) {
                memoryStack.push((-1) * parseInt(screen.value));
            }
            else {
                memoryStack[memoryStack.length - 1] -= parseInt(screen.value);
            }
            break;
        }
    }
}

         function ms(value){
            switch(value){
        case 'memoryStore': {
            ToggleClearandRecall();
            if (memoryStack.length == 0) {
                memoryStack.push(parseFloat(screen.value));
            }
            else {
                memoryStack.push(parseFloat(screen.value));
            }
            break;
        }
    }
}
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
    

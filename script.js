let total = "";
let opperand1 = "";
let opperand2 = "";
let operator = "";

function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function Clear(){ 
    total = "";
    opperand1 = "";
    opperand2 = "";
    operator = "";
    display.textContent = "";
}


function operate(operator, operand1, operand2) {
    if (operator === "+") {
        total = add(parseInt(operand1), parseInt(operand2));
        display.textContent = Math.round(total * 100) / 100;
        
    }
    else if (operator === "-") {
        total = subtract(parseInt(operand1), parseInt(operand2)).toFixed(2);
        display.textContent = Math.round(total * 100) / 100;
        
    }
    else if (operator === "*") {
        total = multiply(parseInt(operand1), parseInt(operand2)).toFixed(2);
        display.textContent = Math.round(total * 100) / 100;
        
    }
    else if (operator === "/") {
        total = divide(parseInt(operand1), parseInt(operand2)).toFixed(2);
        display.textContent = Math.round(total * 100) / 100;
        
    }
}

let display = document.getElementById("screen");
let bottom = document.getElementById("bottom");


let buttons = bottom.querySelectorAll("#digit");
buttons.forEach((button) => {
   button.addEventListener("click", () => {
    if (!total && !operator && !opperand2) {
    Clear();
    opperand1 += button.textContent
    display.textContent += button.textContent;
    display.textContent = display.textContent.replace(/[^a-z0-9]/gi, '');
    }

    else if (total === "" && operator === "") {
    opperand1 += button.textContent
    display.textContent += button.textContent;
    display.textContent = display.textContent.replace(/[^a-z0-9]/gi, '');
    }
    else {
    opperand2 += button.textContent
    display.textContent = opperand2;
    display.textContent = display.textContent.replace(/[^a-z0-9]/gi, '');
    }
    console.log("Operator: " + operator);
    console.log("Opperand 1: " + opperand1);
    console.log("Opperand 2: " + opperand2);
    
    }); 
});

let operators = bottom.querySelectorAll("#operator");
operators.forEach((Operator) => {
    Operator.addEventListener("click", () => {
        if (operator !== "" && opperand1 !== "" && opperand2 !== "") {
            operate(operator, opperand1, opperand2);
            opperand1 = total;
            opperand2 = "";
            operator = Operator.textContent;
            
        }
        else {
            display.textContent = Operator.textContent;
            operator = Operator.textContent;
        }
        console.log("Operator: " + operator);
    console.log("Opperand 1: " + opperand1);
    console.log("Opperand 2: " + opperand2);
        
    });
});

let equal = document.getElementById("equal");
    equal.addEventListener("click", () => {
        operate(operator, opperand1, opperand2);
        
        opperand1 = total;
        opperand2 = "";

    });

let clear = document.getElementById("clear");
clear.addEventListener("click", () =>{
    total = "";
    opperand1 = "";
    opperand2 = "";
    operator = "";
    display.textContent = "";
})

let ce = document.getElementById("ce");
ce.addEventListener("click", () =>{
    total = "";
    opperand1 = "";
    opperand2 = "";
    operator = "";
    display.textContent = "";
})
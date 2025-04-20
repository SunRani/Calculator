let total;
let current;
let operator;

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


function operate(operator, operand1, operand2) {
    if (operator === "+") {
        display.textContent= add(parseInt(operand1), parseInt(operand2))
    }
    else if (operator === "-") {
        return subtract(parseInt(operand1), parseInt(operand2))
    }
    else if (operator === "*") {
        return multiply(parseInt(operand1), parseInt(operand2))
    }
    else if (operator === "/") {
        return divide(parseInt(operand1), parseInt(operand2))
    }
}

let display = document.getElementById("screen");
let bottom = document.getElementById("bottom");


let buttons = document.querySelectorAll("#digit");
buttons.forEach((button) => {
   button.addEventListener("click", () => {
    display.textContent = button.textContent;
    console.log(button.textContent);
    }); 
});

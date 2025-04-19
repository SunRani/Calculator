let operand1;
let operand2;
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
        return add(operand1, operand2)
    }
    else if (operator === "-") {
        return subtract(operand1, operand2)
    }
    else if (operator === "*") {
        return multiply(operand1, operand2)
    }
    else if (operator === "/") {
        return divide(operand1, operand2)
    }
}

let display = document.getElementById("screen");
let bottom = document.getElementById("bottom");


let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
   button.addEventListener("click", () => {
    display.textContent = button.textContent;
    }); 
});

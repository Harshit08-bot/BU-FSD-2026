import { Calculator } from "./calc.js";

console.log("Calculator module loaded...");
const calc = new Calculator();

const display = document.querySelector("#display");
const keys = document.querySelector(".calculator__keys");

keys.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if(!button) {
        return;
    }

    const {number, operator, action} = button.dataset;
    if(number !== undefined) {
        calc.inputNumber(number);
        updateDisplay();
        return;
    }
    if(operator !== undefined) {
        calc.setOperator(operator);
        updateDisplay();
        return;
    }
    if(action === "decimal") {
        calc.inputDecimal();
        updateDisplay();
        return;
    }
    if(action == "equals") {
        calc.calculate();
        updateDisplay();
        return;
    }
});

function updateDisplay() {
    display.textContent = calc.displayValue;
}



// console.log(calc.#currentValue); you cannot access private variables

// You don't call a getter like a function
// Access it like a property
// console.log(calc.displayValue);

// calc.inputNumber("4");
// console.log(calc.displayValue);
// calc.inputNumber("6");
// console.log(calc.displayValue);
// calc.inputDecimal(".");
// console.log(calc.displayValue);
// calc.inputNumber("9");
// console.log(calc.displayValue);
// calc.inputDecimal(".");
// console.log(calc.displayValue);
// calc.inputNumber("9");
// console.log(calc.displayValue);


// calc.inputNumber("2");
// calc.inputNumber("5");

// calc.setOperator("+");

// calc.inputNumber("1");
// calc.inputNumber("0");

// calc.calculate();

// calc.setOperator("-");

// calc.inputNumber("5");

// calc.calculate();

// calc.setOperator("+");

// calc.inputNumber("1");
// calc.inputNumber("2");

// calc.calculate();

// console.log("Result : ", calc.displayValue);
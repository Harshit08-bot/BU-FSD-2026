// class - allow us to create a blueprint for our calc
// export - Make this class available to other JS modules
export class Calculator {
    // Current number
    // Previous number
    // Selected operator
    // Make these variables private using #
    #currentValue = "0";
    #previousValue = null;
    #selectedOperator = null;
    #waitingForOperand = false;
    
    // Getter for currentValue
    // get is a pre-defined keyword
    get displayValue() {
        return this.#currentValue;
    }

    inputNumber(number) {
        if(this.#waitingForOperand) {
            this.#currentValue = number;
            this.#waitingForOperand = false;
            return;
        }

        if(this.#currentValue === "0") {
            this.#currentValue = number;
            return;
        }
        this.#currentValue += number;
    }

    inputDecimal() {
        // 0 -> . -> 0.
        // 1 -> . -> 5 = 1.5
        // 1.5.7
        // check if currentValue already have one decimal
        if(this.#currentValue.includes(".")) {
            return;
        }
        this.#currentValue += ".";
    }

    
    setOperator(operator) {
        // #currentValue = "25"
        // We need to remember 25 as first operand
        this.#previousValue = Number(this.#currentValue);
        this.#selectedOperator = operator;
        this.#waitingForOperand = true;
    }

    calculate() {
        const currentValue = Number(this.#currentValue);

        switch(this.#selectedOperator) {
            case "+":
                this.#currentValue = this.#previousValue + currentValue;
                break;
            case "-":
                this.#currentValue = this.#previousValue - currentValue;
                break;
            case "*":
                this.#currentValue = this.#previousValue * currentValue;
                break;
            case "/":
                this.#currentValue = this.#previousValue / currentValue;
                break;
        }

        this.#previousValue = null;
        this.#selectedOperator = null;
        this.#waitingForOperand = true;
    }
}
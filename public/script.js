const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const allClearButton = document.querySelector("#all-clear");
const deleteButton = document.querySelector("#delete");
const equalsButton = document.querySelector("#equals");

const currentOperandText = document.querySelector("#current");
const previousOperandText = document.querySelector("#previous");

class Calculator {
    constructor(currentOperandText, previousOperandText) {
        this.currentOperandText = currentOperandText;
        this.previousOperandText = previousOperandText;
        this.allClear()
    }

    allClear() {
        this.currentOperandText.innerText = ''
        this.previousOperandText.innerText = ''
        this.operation = undefined
        this.currentOperand = ''
    }

    delete() {
        this.currentOperand = ''
        this.currentOperandText.innerText = ''
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand += number
    }

    operator(operator) {
        this.calculate()
        this.currentOperation = operator
    }

    calculate() {
        if (this.previousOperandText.innerText !== '') {
            if (this.currentOperation === '+') {
                this.previousOperandText.innerText = +this.previousOperandText.innerText + +this.currentOperand
            } else if (this.currentOperation === '-') {
                this.previousOperandText.innerText = +this.previousOperandText.innerText - +this.currentOperand
            } else if (this.currentOperation === '÷' && currentOperandText.innerText !== '') {
                this.previousOperandText.innerText = +this.previousOperandText.innerText / +this.currentOperand
            } else if (this.currentOperation === '*' && currentOperandText.innerText !== '') {
                this.previousOperandText.innerText = +this.previousOperandText.innerText * +this.currentOperand
            } 
        }
        else {
            this.previousOperandText.innerText = this.currentOperand
        }
        this.delete()
    }

    updateOutput() {
        this.currentOperandText.innerText = this.currentOperand
    }
}



const calculator = new Calculator(currentOperandText, previousOperandText)


numberButtons.forEach(numberButton => numberButton.addEventListener('click', () => {
    calculator.appendNumber(numberButton.innerText)
    calculator.updateOutput()
}))

operatorButtons.forEach(button => button.addEventListener('click', () => {
    calculator.operator(button.innerText)
}))

equalsButton.addEventListener('click', () => calculator.calculate())

allClearButton.addEventListener('click', () => calculator.allClear())

deleteButton.addEventListener('click', () => {
    calculator.delete()
})
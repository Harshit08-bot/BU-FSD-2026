let firstNum;
let secondNum;
let result;

document.querySelector("#add").addEventListener("click", add);
document.querySelector("#sub").addEventListener("click", sub);
document.querySelector("#div").addEventListener("click", div);
document.querySelector("#mul").addEventListener("click", mul);

function add() {
    // TODO: Make the firstNum and secondNum reusable
    firstNum = parseInt(document.querySelector("#box-1").value);
    secondNum = parseInt(document.querySelector("#box-2").value);
    result = firstNum + secondNum;
    document.querySelector("#result").innerText = result;
}

function sub() {
    firstNum = parseInt(document.querySelector("#box-1").value);
    secondNum = parseInt(document.querySelector("#box-2").value);
    result = firstNum - secondNum;
    document.querySelector("#result").innerText = result;
}

function div() {
    firstNum = parseInt(document.querySelector("#box-1").value);
    secondNum = parseInt(document.querySelector("#box-2").value);
    result = firstNum / secondNum;
    document.querySelector("#result").innerText = result;
}

function mul() {
    firstNum = parseInt(document.querySelector("#box-1").value);
    secondNum = parseInt(document.querySelector("#box-2").value);
    result = firstNum * secondNum;
    document.querySelector("#result").innerText = result;
}
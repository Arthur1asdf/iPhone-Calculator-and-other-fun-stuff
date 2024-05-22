const calcDisplay = document.getElementById("calcDisplay");

let currentOperationSymbol = null;
let currentHighlighted = null;
let firstNumber = 0;
let secondNumber = 0;
let negativeStart = 0;
function putOnDisplay(input) {
  document.getElementById("clearButton").innerHTML = "C";
  checkIfOperationIsClicked();
  calcDisplay.value += input;
  if (negativeStart == 1) {
    calcDisplay.value = "";
    calcDisplay.value += input * -1;
    negativeStart = 0;
  }
}
function clearDisplay() {
  calcDisplay.value = "";
  checkIfOperationIsClicked();
  currentOperationSymbol = null;
  firstNumber = null;
  secondNumber = null;
  document.getElementById("clearButton").innerHTML = "AC";
  negativeStart = 0;
}
function calculate() {
  secondNumber = calcDisplay.value;
  if (secondNumber == null) {
    secondNumber == firstNumber;
  }
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  try {
    switch (currentOperationSymbol) {
      case "/":
        calcDisplay.value = (firstNumber/secondNumber);
        break;
      case "-":
        calcDisplay.value = (firstNumber - secondNumber);
        break;
      case "+":
        calcDisplay.value = (firstNumber + secondNumber);
        break;
      case "*":
        calcDisplay.value = (firstNumber * secondNumber);
        break;
      default:
        console.log(
          "no happened cause no operation symbol was pressed should I put alert instead?"
        );
        break;
    }
  } catch (error) {
    calcDisplay.value = "Error";
  }
}
function percentage() {
  calcDisplay.value = calcDisplay.value / 100;
}
function swapSigns() {
  if (firstNumber != null && currentOperationSymbol != null) {
    calcDisplay.value = "-0";
    negativeStart = 1;
  } else if (
    firstNumber == null &&
    currentOperationSymbol == null &&
    calcDisplay.value == 0
  ) {
    calcDisplay.value = "-0";
    negativeStart = 1;
  } else {
    calcDisplay.value = calcDisplay.value * -1;
  }
}
function operation(input, button) {
  currentOperationSymbol = input;
  checkIfOperationIsClicked();
  button.classList.add("operationsButtonHighlighted");
  currentHighlighted = button;
  firstNumber = calcDisplay.value;
}
function checkIfOperationIsClicked() {
  if (currentHighlighted) {
    currentHighlighted.classList.remove("operationsButtonHighlighted");
    calcDisplay.value = "";
    currentHighlighted = null;
  }
}

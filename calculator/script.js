const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

input.value = 0;
let awaiting = false;
let formerNum = 0;
let ifOperator = false;
let answerString = "";

function sendValue(num) {
  if (ifOperator === true) {
    ifOperator = false;
    input.value = "";
  }
  if (awaiting) {
    input.value = num;
    awaiting = false;
  } else {
    const displayValue = input.value;
    input.value = displayValue === "0" ? num : displayValue + num;
  }
  answerString = answerString + num;
  console.log("num", answerString);
}

function addDecimal() {
  if (awaiting) return;
  if (!input.value.includes(".")) {
    input.value = `${input.value}.`;
  }
}

function useOperator(operator) {
  ifOperator = true;
  if (operator && awaiting) {
    return;
  }
  const currentNum = input.value;
  if (!formerNum) {
    formerNum = currentNum;
  }
  input.value = operator;
  answerString = answerString + operator;
  console.log("oper", answerString);
  
  document.getElementsByClassName("symbol")[0].style.backgroundColor = "white";
  document.getElementsByClassName("symbol")[0].style.color = "black";
  document.getElementsByClassName("symbol")[1].style.backgroundColor =
    "white";
  document.getElementsByClassName("symbol")[1].style.color = "black";
  document.getElementsByClassName("symbol")[2].style.backgroundColor =
    "white";
  document.getElementsByClassName("symbol")[2].style.color = "black";
  document.getElementsByClassName("symbol")[3].style.backgroundColor =
    "white";
  document.getElementsByClassName("symbol")[3].style.color = "black";

  if (operator === "+") {
    document.getElementById("plus").style.backgroundColor = "white";
    document.getElementById("plus").style.color = "black";
  } else if (operator === "-") {
    document.getElementById("minus").style.backgroundColor = "white";
    document.getElementById("minus").style.color = "black";
  } else if (operator === "*") {
    document.getElementById("multiply").style.backgroundColor = "white";
    document.getElementById("multiply").style.color = "black";
  } else if (operator === "/") {
    document.getElementById("divide").style.backgroundColor = "white";
    document.getElementById("divide").style.color = "black";
  }
}

buttons.forEach((button) => {
  if (button.classList.contains("number")) {
    button.addEventListener("click", () => sendValue(button.value));
  } else if (button.classList.contains("symbol")) {
    button.addEventListener("click", () => useOperator(button.value));
  } else if (button.classList.contains("decimal")) {
    button.addEventListener("click", () => addDecimal());
  } else if (button.classList.contains("c")) {
    button.addEventListener("click", () => reset());
  } else if (button.classList.contains("equal")) {
    button.addEventListener("click", () => {
      input.value = eval(answerString.toString());
    });
  }
});

function reset() {
  input.value = 0;
  console.log("new");
  formerNum = 0;
  secondNum = 0;
  operator = "";
  answerString = "";
  awaiting = false;
}

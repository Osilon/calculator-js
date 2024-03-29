//Variables
let displayValue = "";
let array = [];
let operator;
let hasDot = false;

const operation = document.querySelector(".operation");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const equal = document.querySelector(".result");
const plusMinus = document.querySelector(".plus-minus");
const dot = document.querySelector(".comma");

const nine = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four = document.querySelector(".four");
const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
const zero = document.querySelector(".zero");

const plus = document.querySelector(".add");
const minus = document.querySelector(".subtract");
const x = document.querySelector(".multiply");
const xOp = document.querySelector(".division");

//Functions for calculations
function add(array){
  let result = 0;
  for(let i = 0; i < array.length; i++){
    result += Number(array[i]);
  }
  return result;
}

function subtract(array){
  let result = array[0];
  for(let i = 1; i < array.length; i++){
    result -= Number(array[i]);
  }
  return result;
}

function multiply(array){
  let result = 1;
  for(let i = 0; i < array.length; i++){
    result *= Number(array[i]);
  }
  return result;
}

function divide(array){
  let result = array[0];
  for(let i = 1; i < array.length; i++){
    result /= Number(array[i]);
  }
  return result;
}

//Function that calculates inputed numbers
function makeCalculation(operator, array){
  if(operator === "+"){
    return add(array);
  }
  else if(operator === "-"){
    return subtract(array);
  }
  else if(operator === "*"){
    return multiply(array);
  }
  else if(operator === "/"){
    return divide(array);
  }
  else{
    return "ERROR";
  }
}

clear.addEventListener("click", () => {
  displayValue = "";
  operation.innerHTML = "";
  array = [];
  hasDot = false;
});

del.addEventListener("click", () => {
  for(let i = 0; i < operation.innerHTML.length; i++){
    if(operation.innerHTML[i] === "+"){
      array = [];
      operation.innerHTML = "";
      displayValue = "";
      hasDot = false;
    }
  }
  let array1 = [];
  for(let i = 0; i < displayValue.length; i ++){
    array1[i] = displayValue[i];
  }
  array1.pop()
  let final = array1.join("");
  displayValue = "";
  displayValue = final;
  operation.innerHTML = "";
  operation.innerHTML = final;
});

nine.addEventListener("click", () => {
  displayValue += "9";
  operation.innerHTML += "9";
});

eight.addEventListener("click", () => {
  displayValue += "8";
  return operation.innerHTML += "8";
});

seven.addEventListener("click", () => {
  displayValue += "7";
  return operation.innerHTML += "7";
});

six.addEventListener("click", () => {
  displayValue += "6";
  return operation.innerHTML += "6";
});

five.addEventListener("click", () => {
  displayValue += "5";
  return operation.innerHTML += "5";
});

four.addEventListener("click", () => {
  displayValue += "4";
  return operation.innerHTML += "4";
});

three.addEventListener("click", () => {
  displayValue += "3";
  return operation.innerHTML += "3";
});

two.addEventListener("click", () => {
  displayValue += "2";
  return operation.innerHTML += "2";
});

one.addEventListener("click", () => {
  displayValue += "1";
  return operation.innerHTML += "1";
});

zero.addEventListener("click", () => {
  displayValue += "0";
  return operation.innerHTML += "0";
});


plus.addEventListener("click", () => {
  if(operator === undefined){
    operator = "+";
  }
  array.push(displayValue);
  displayValue = "";
  operation.innerHTML = "";
  operation.innerHTML += makeCalculation(operator, array) + " + ";
  let res = makeCalculation(operator, array);
  array = [];
  array.push(res);
  operator = "+";
  hasDot = false;
});

minus.addEventListener("click", () => {
  if(operator === undefined){
    operator = "-";
  }
  array.push(displayValue);
  displayValue = "";
  operation.innerHTML = "";
  operation.innerHTML += makeCalculation(operator, array) + " - ";
  let res = makeCalculation(operator, array);
  array = [];
  array.push(res);
  operator = "-";
  hasDot = false;
});

x.addEventListener("click", () => {
  if(operator === undefined){
    operator = "*";
  }
  array.push(displayValue);
  displayValue = "";
  operation.innerHTML = "";
  operation.innerHTML += makeCalculation(operator, array) + " x ";
  let res = makeCalculation(operator, array);
  array = [];
  array.push(res);
  operator = "*";
  hasDot = false;
});

xOp.addEventListener("click", () => {
  if(operator === undefined){
    operator = "/";
  }
  array.push(displayValue);
  displayValue = "";
  operation.innerHTML = "";
  operation.innerHTML += makeCalculation(operator, array) + " ÷ ";
  let res = makeCalculation(operator, array);
  array = [];
  array.push(res);
  operator = "/";
  hasDot = false;
});



equal.addEventListener("click", () => {
  array.push(displayValue);
  for(let i = 0; i < array.length; i++){
    array[i] = Number(array[i]);
  }
  operation.innerHTML = makeCalculation(operator, array);
  array = [];
  displayValue = operation.innerHTML;
  console.log(array);
});

plusMinus.addEventListener("click", () => {
  let num = -1 * displayValue;
  operation.innerHTML = String(num);
  displayValue = num;
});

dot.addEventListener("click", () => {
  if (!hasDot) {
    displayValue += ".";
    operation.innerHTML += ".";
    hasDot = true;
  }
});
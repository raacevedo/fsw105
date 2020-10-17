var readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Please enter the first number: ");
var secondNum = readlineSync.questionInt("Please enter the second number: ");
var selectedOperator = readlineSync.question("What operation would you like to perform: add/sub/mult/div/quit? ");

function addTwoNums(num1, num2){
    return "Sum of number 1 and number2 = " + (num1 + num2);
}

function subtractTwoNums(num1, num2){
    return "Difference of number 1 and number2 = " + (num1 - num2);
}

function multiplyTwoNums(num1, num2){
    return "Product of number 1 and number2 = " + (num1 * num2);
}

function divideTwoNums(num1, num2){
    return "Quotient of number 1 and number2 = " + (num1 / num2);
}

if (selectedOperator == "add") {
    console.log(addTwoNumbers(firstNum, secondNum))
}else if (selectedOperator == "sub"){
    console.log(subtractTwoNumbers(firstNum, secondNum))
}else if (selectedOperator == "mult"){
    console.log(multiplyTwoNumbers(firstNum, secondNum))
}else if (selectedOperator == "div"){
    console.log(divideTwoNumbers(firstNum, secondNum))
}else if (selectedOperator == "quit"){
    console.log("Thank you for using this calculator")
}
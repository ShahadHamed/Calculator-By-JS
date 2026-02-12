
var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
var operation = prompt("Choose operation: +  -  *  /");

function calcNumbers(num1, num2, operation) {

    var result;

    if (operation == "+") {
        result = num1 + num2;
    }
    else if (operation == "-") {
        result = num1 - num2;
    }
    else if (operation == "*") {
        result = num1 * num2;
    }
    else if (operation == "/") {
        result = num1 / num2;
    }
    else {
        result = "Invalid operation";
    }

    return result;
}

var Result = calcNumbers(num1, num2, operation);
console.log("Result: " + Result);




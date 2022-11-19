console.log("============Using Static Keyword===============");
var num1 = 100;
var num2 = 75;
var Calculations = /** @class */ (function () {
    function Calculations() {
    }
    Calculations.prototype.display = function () {
        console.log("The Addition Number of ".concat(num1, " and ").concat(num2, " is: ").concat(Calculations.addition));
        console.log("The Substraction Number of ".concat(num1, " and ").concat(num2, " is : ").concat(Calculations.substraction));
        console.log("The Multiplication Number of ".concat(num1, " and ").concat(num2, " is: ").concat(Calculations.multiplication));
        console.log("The Reminder Number of ".concat(num1, " and ").concat(num2, " is : ").concat(Calculations.reminder));
    };
    Calculations.addition = num1 + num2;
    Calculations.substraction = num1 - num2;
    Calculations.multiplication = num1 * num2;
    Calculations.reminder = num1 / num2;
    return Calculations;
}());
//console.log(`The Addition of ${num1} and ${num2} is :`, Calculations.addition = num1+num2);
var operations = new Calculations();
operations.display();

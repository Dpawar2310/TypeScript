console.log("============Using Static Keyword===============");

let num1 : number =100;
let num2 : number =75;
class Calculations{
    static addition : number = num1+num2;
    static substraction : number = num1-num2;
    static multiplication : number =num1*num2;
    static reminder : number =num1/num2;

    display(){
        console.log(`The Addition Number of ${num1} and ${num2} is: ${Calculations.addition}`);
        console.log(`The Substraction Number of ${num1} and ${num2} is : ${Calculations.substraction}`);
        console.log(`The Multiplication Number of ${num1} and ${num2} is: ${Calculations.multiplication}`);
        console.log(`The Reminder Number of ${num1} and ${num2} is : ${Calculations.reminder}`);
    }
}

//console.log(`The Addition of ${num1} and ${num2} is :`, Calculations.addition = num1+num2);

let operations = new Calculations();
operations.display();

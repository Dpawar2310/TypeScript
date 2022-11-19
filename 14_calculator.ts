import { Calculator } from "./14_cal";

var objCal = new Calculator();
console.log(objCal.add(2,3));
console.log(objCal.sub(10,5));

let courses =["Angular", "React", "Nodejs"];
console.log(courses.toString());

interface IEmployee{
    id : number;
    name: string;
    lastname : string;
}

let e1: IEmployee;
let e2 ={id : 123, name: "John"};

//e1 = e2;  //Type Casting
//e2 = e1; //



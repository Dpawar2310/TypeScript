console.log("==============Assignment Object=============");
const employee = {
    empId :1,
    empName : "Ankita",
    empAge: 23,
    empSalary : 25000,
    empAddress : "Mumbai"
}
console.log(employee);

console.log("==============Traversing object==============");
for(const key in employee){
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
       const element = employee [key];
       console.log(element);
       
    }
}

console.log("===========object Destructring ===============");
var {empId: Id, empName: Name, empAge: Age, empSalary: Salary, empAddress: Address} =employee
console.log(Id, Name, Age, Salary, Address );




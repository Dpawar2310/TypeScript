console.log("==============Assignment Object=============");
var employee = {
    empId: 1,
    empName: "Ankita",
    empAge: 23,
    empSalary: 25000,
    empAddress: "Mumbai"
};
console.log(employee);
console.log("==============Traversing object==============");
for (var key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        var element = employee[key];
        console.log(element);
    }
}
console.log("===========object Destructring ===============");
var Id = employee.empId, Name = employee.empName, Age = employee.empAge, Salary = employee.empSalary, Address = employee.empAddress;
console.log(Id, Name, Age, Salary, Address);

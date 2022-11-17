var emp = {
    name: "Rutuja",
    score: 5471
};
for (var key in emp) {
    console.log(key);
    console.log(emp[key]);
}
var courses = ["Angular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var index = 0; index < courses.length; index++) {
    console.log(courses[index]);
}
var std = {
    firstName: "Dipali",
    lastName: "Pawar"
};
var userfirstName = std.firstName, userlastName = std.lastName; //Destructuring
console.log(userfirstName);
console.log(userlastName);

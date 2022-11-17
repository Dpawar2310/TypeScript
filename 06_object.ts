var emp = {
    name: "Rutuja",
    score: 5471
}
for (const key in emp) {
console.log(key);
console.log(emp [key]);
}

var courses : any =["Angular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);

for (let index = 0; index < courses.length; index++) {
  console.log(courses [index]);
}

var std ={
    firstName : "Dipali",
    lastName : "Pawar"
}
var {firstName:userfirstName, lastName:userlastName} = std;  //Destructuring

console.log(userfirstName);
console.log(userlastName);



const covid = ["J&J", "Pfizer", "Covaxin"];
console.log(covid);

console.log("==========Adding Element============");
covid.push("sputnick");
console.log(covid);

console.log("==========Traversing Array =============");
for (const iterator of covid) {
    console.log(iterator);
}

console.log("=============Array Destructuring ==========");

var {'0': first, "1": second, "2": third, '3':fourth} = covid
console.log(first, second, third, fourth);




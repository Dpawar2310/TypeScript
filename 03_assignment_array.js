var covid = ["J&J", "Pfizer", "Covaxin"];
console.log(covid);
console.log("==========Adding Element============");
covid.push("sputnick");
console.log(covid);
console.log("==========Traversing Array =============");
for (var _i = 0, covid_1 = covid; _i < covid_1.length; _i++) {
    var iterator = covid_1[_i];
    console.log(iterator);
}
console.log("=============Array Destructuring ==========");
var first = covid["0"], second = covid["1"], third = covid["2"], fourth = covid["3"];
console.log(first, second, third, fourth);

// var num1 = prompt ("Enter Number");
//var num2 = prompt ("Enter Number");
//var num3 = prompt ("Enter Number");
var gradeCalculator = function (num1, num2, num3) {
    console.log("Mathematics Marks : $ {num1}");
    console.log("Science Marks : $ {num2}");
    console.log("Physics Marks : $ {num3}");
    var sumOfMarks = (num1 + num2 + num3) / 3;
    console.log("Avarage of Marks is : $ {sumOfMarks}");
    if (sumOfMarks <= 70) {
        console.log("Grade is 'c'");
    }
    else if (sumOfMarks >= 70 && sumOfMarks <= 90) {
        console.log("Grade is 'B'");
    }
    else if (sumOfMarks >= 90) {
        console.log("Grade is 'A'");
    }
};
gradeCalculator(78, 85, 76);

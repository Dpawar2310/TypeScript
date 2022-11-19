console.log("=================Polymorphism===================");
var personIs = /** @class */ (function () {
    function personIs() {
    }
    Object.defineProperty(personIs.prototype, "name", {
        get: function () {
            return this._student, this._employee, this._work;
        },
        set: function (name) {
            this._student = name;
            this._employee = name;
            this._work = name;
        },
        enumerable: false,
        configurable: true
    });
    personIs.prototype.display = function () {
        console.log(this.name);
    };
    return personIs;
}());
var student = new personIs();
student.name = "The Student Name Is : Rutuja Patil";
console.log(student.name);
var employee = new personIs();
employee.name = "The Employee Name Is : Sayali More";
//console.log(employee.name);
employee.display();
var work = new personIs();
work.name = "The Work Is : Software Development";
work.display();

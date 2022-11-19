console.log("=================Access Modifire================");
var person = /** @class */ (function () {
    function person() {
    }
    Object.defineProperty(person.prototype, "information", {
        get: function () {
            return this._personInformation;
        },
        set: function (information) {
            this._personInformation = information;
        },
        enumerable: false,
        configurable: true
    });
    person.prototype.display = function () {
        console.log(this._personInformation);
    };
    return person;
}());
var info = new person();
info.information = "My Name Is Dipali Pawar";
console.log(info.information);

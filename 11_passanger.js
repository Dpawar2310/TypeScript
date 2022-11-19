var passanger = /** @class */ (function () {
    function passanger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    passanger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return passanger;
}());
var passanger1 = new passanger("Jsck", "Sparrow", 102);
passanger1.display();

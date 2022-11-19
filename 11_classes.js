var flight = /** @class */ (function () {
    function flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    flight.prototype.display = function () {
        console.log(this.flightNo, this.from, this.to);
    };
    return flight;
}());

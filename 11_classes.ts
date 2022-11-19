interface Iflight {
    flightNo : number;
    from : string;
    to: string;
}

class flight implements Iflight{
    flightNo: number;
    from : string;
    to : string;

    constructor (flightNo: number, from: string, to: string){
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    display(){
        console.log(this.flightNo, this.from, this.to);
        
    }
}
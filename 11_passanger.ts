class passanger {
    firstName : string;
    lastName : string;
    frequentFlyerNo : number;
    constructor (firstName: string, lastName: string, frequentFlyerNo: number)
    {
        this.firstName =firstName;
        this.lastName =lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    display(){
        console.log(this.firstName +" "+ this.lastName +" "+ this.frequentFlyerNo);
        
    }
}
var passanger1 = new passanger ("Jsck","Sparrow",102);
passanger1.display();
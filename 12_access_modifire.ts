console.log("=================Access Modifire================");

class person{
    private _personInformation : string;

    get information() : string {
        return this._personInformation;
    }
    set information (information : string){
        this._personInformation = information;
    }
    display(){
        console.log(this._personInformation);
        
    }
}
let info = new person();
info. information = "My Name Is Dipali Pawar";
console.log(info.information);

console.log("=================Polymorphism===================");
class personIs{
    private _student : string;
    private _employee : string;
    protected _work : string;

    get name() : string{
       return this._student, this._employee, this._work;
    }

    set name (name : string){
        this._student = name;
        this._employee = name;
        this._work = name;
    }
    display(){
        console.log(this.name);
        
    }
}

let student = new personIs();
student.name ="The Student Name Is : Rutuja Patil";
console.log(student.name);

let employee = new personIs();
employee.name ="The Employee Name Is : Sayali More";
//console.log(employee.name);
employee.display();

let work = new personIs();
work.name ="The Work Is : Software Development";
work.display();















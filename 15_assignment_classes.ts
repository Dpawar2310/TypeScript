class Organizer {
    public id: number;
    public name: string;

    public print(): void {
        console.log(`The orgnizer...`);

    }
}

class Person extends Organizer {
    constructor(id: number, name: string) {
        super();
        this.id = id;
        this.name = name;
    }
    public print() {
        super.print();
        console.log(`The Id is: ${this.id} Name: ${this.name}`);
    }
}

let output = new Person(122, "Rutuja");
output.print();

console.log(`=============================`);

class Events {
    public id: number;
    public name: string;
    public description: string;
    public startTime: any;

    public print(): void {
        console.log(`Event`);

    }
}

class Family extends Events {
    constructor(id: number, name: string, description: string, starTime: any) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = starTime;
    }
    public print(): void {
        super.print();
        console.log(`The Id No.: ${this.id}
     The Name: ${this.name} 
     The Description is: ${this.description} 
     Time: ${this.startTime}`);
    }
}

let celebration = new Family(1, "Ankita Patil", "Wel-come", '02:54pm');
celebration.print()

console.log(`===============================================`);

class Venue extends Events {
    public address: string;
    
    constructor(id: number, name: string, description: string, address: string) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;

    }
    public print(): void {
        super.print()
        console.log(`The Id No.: ${this.id}
        The Name: ${this.name} 
        The Description is: ${this.description} 
        Address: ${this.address}`);
        
    }
}

let info = new Venue(45,"Varsha Patil","Hii","Sangli")
info.print();

interface IPersonDetails {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    street: string
}

interface IPersonOtherDetails {
    education: string;
    workInCompany: string;
    exprience: string;
    salary: number;
}

interface IPerson extends IPersonDetails, IPersonOtherDetails {
    age: number;
    hobbies: string;
    specialFood: string;
}

var personInformation: IPerson = {
    id: 124,
    firstName: "Dipali",
    lastName: "Pawar",
    gender: "Female",
    street: "Islampur",
    education: "M.C.A",
    workInCompany: "Gurukul PVT LTD",
    exprience: "2 year",
    salary: 20000,
    age: 26,
    hobbies: "Reading",
    specialFood: "Masala Pulav"
}
console.log("Person Details :", personInformation);


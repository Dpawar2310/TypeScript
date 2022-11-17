function display (id: number, name: string, role: string ="guest user"){
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
    }

    display(1,"Dipali", "Admin");
    display(1, "Dipali");
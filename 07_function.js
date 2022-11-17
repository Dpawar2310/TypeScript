function display(id, name, role) {
    if (role === void 0) { role = "guest user"; }
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
display(1, "Dipali", "Admin");
display(1, "Dipali");

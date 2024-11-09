"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "harsh",
    email: "harsh@gmail.com",
    isPaid: false,
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
createUser({ name: "harsh", isPaid: false });
//weird(bad) behaviour
// createUser({ name: "harsh", isPaid: false, email:"" }); //not allowed
//but this is allowed
createUser(User);
function createCourse() {
    return { name: "reactjs", price: 399 };
}

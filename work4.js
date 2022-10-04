"use strict";
exports.__esModule = true;
function createCustomerID(name, id) {
    return name + " " + id;
}
var myID = createCustomerID("Ann", 10);
console.log(myID);
var IdGenerator = function (name, id) {
    return name + " " + id;
};
IdGenerator = createCustomerID;
console.log(IdGenerator("Roman", 5));

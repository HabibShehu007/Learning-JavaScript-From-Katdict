//  Declaring Variables Using let, const, and var
let name = "Habib"; // String
const age = 21; // Number
var isStudent = true; // Boolean

//  Different Data Types in JavaScript
let price = 199.99; // Number (Decimal)
let colors = ["red", "blue", "green"]; // Array
let user = { name: "Habib", country: "Nigeria" }; // Object

//  Undefined & Null
let futureGoal; // Undefined (not assigned yet)
let completedTask = null; // Null (empty value)

//  Checking Data Types
console.log(typeof name); // Output: "string"
console.log(typeof age); // Output: "number"
console.log(typeof isStudent); // Output: "boolean"
console.log(typeof colors); // Output: "object"
console.log(typeof user); // Output: "object"
console.log(typeof futureGoal); // Output: "undefined"
console.log(typeof completedTask); // Output: "object"

//  Example Usage in a Function
function userDetails() {
    return My name is ${name}, I am ${age} years old, and student status is ${isStudent};
}

console.log(userDetails());
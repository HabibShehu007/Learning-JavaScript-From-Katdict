//  Arithmetic Operators (Basic Math)
let a = 10;
let b = 5;

console.log(a + b); //  15 (Addition)
console.log(a - b); //  5 (Subtraction)
console.log(a * b); //  50 (Multiplication)
console.log(a / b); //  2 (Division)
console.log(a % b); //  0 (Remainder after division)

// Comparison Operators (Checking Values)
console.log(10 == "10");  //  true (Checks value only)
console.log(10 === "10"); //  false (Checks value & type)
console.log(10 != 5);     //  true (Checks if different)
console.log(10 !== "10"); //  true (Checks both value & type)
console.log(5 > 2);       //  true (Greater than)
console.log(5 < 2);       //  false (Less than)

// Logical Operators (Making Smart Decisions)
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); //  true (Both must be true)
console.log(age >= 18 || hasID); //  true (At least one must be true)
console.log(!hasID);             //  false (Negates the value)
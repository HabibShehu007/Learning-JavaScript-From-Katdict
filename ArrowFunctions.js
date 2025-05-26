// Example 1: Traditional vs. Arrow Function

// Traditional function
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function (shorter version)
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Habib")); // Output: Hello, Habib!


// Example 2: Arrow Function Without Parameters

const sayHello = () => console.log("Hello, world!");

sayHello(); // Output: Hello, world!


// Example 3: Arrow Function with Multiple Parameters
const sumNumbers = (a, b) => a + b;

console.log(sumNumbers(10, 5)); // Output: 15
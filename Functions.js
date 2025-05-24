// Example 1: Basic Function Declaration & Invocation
javascript
function greet() {
    console.log("Hello, welcome to the coding world!");
}

greet(); // Calling the function

// Example 2: Function with Parameters
javascript
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome back.`);
}

greetUser("Habib"); // Calls function with argument


// Example 3: Returning a Value from a Function
javascript
function square(num) {
    return num * num;
}

let result = square(4);
console.log(`The square of 4 is ${result}`);


// Example 4: Function that Performs a Calculation
javascript
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(10, 5);
console.log(`The sum is ${sum}`);


// Example 5: Function Inside Another Function (Nested Functions)
javascript
function outerFunction() {
    console.log("Outer function running...");

    function innerFunction() {
        console.log("Inner function running...");
    }

    innerFunction(); 
}

outerFunction();
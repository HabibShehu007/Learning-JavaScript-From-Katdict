//  Example 1: Destructuring (Extracting Values from Objects & Arrays)

// Object destructuring
const user = { name: "Habib", age: 25, country: "Nigeria" };
const { name, age, country } = user;

console.log(name); // Output: Habib
console.log(age);  // Output: 25
console.log(country); // Output: Nigeria

// Array destructuring
const numbers = [10, 20, 30];
const [first, second, third] = numbers;

console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(third); // Output: 30



// Example 3: Spread & Rest Operators (Handling Arrays and Arguments Dynamically)

// Spread operator example
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Rest operator example
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30)); // Output: 60
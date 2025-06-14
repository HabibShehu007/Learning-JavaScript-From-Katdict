// adding an element to the end
let cars = ["Toyota", "Honda"];
cars.push("Tesla");
console.log(cars); // ["Toyota", "Honda", "Tesla"]

// using pop() to remove the last element
let cities = ["NYC", "LA", "Miami"];
cities.pop();
console.log(cities); // ["NYC", "LA"]

// forEach() – Iterating through an array
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6

// map() – Creating a new array from an existing one
let nums = [1, 2, 3];
let doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
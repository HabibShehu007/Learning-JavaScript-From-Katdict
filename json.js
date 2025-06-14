//  Creating an Object
let person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
console.log(person.name); // "Alice"

// Adding/Modifying Object Properties
let car = { brand: "Toyota" };
car.model = "Camry";
car.year = 2020;
console.log(car); // { brand: "Toyota", model: "Camry", year: 2020 }

// JSON (JavaScript Object Notation)
let jsonData = '{"name": "Bob", "age": 30}';
let parsedData = JSON.parse(jsonData);
console.log(parsedData.age); // 30

// Converting Object to JSON
let user = { name: "Charlie", id: 123 };
let jsonUser = JSON.stringify(user);
console.log(jsonUser); // '{"name":"Charlie","id":123}'
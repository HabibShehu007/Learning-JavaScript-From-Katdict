// Example 1: Function with Parameters & Arguments
javascript
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome back.`);
}

greetUser("Habib"); // Calls function with argument
greetUser("Khadija"); // Calls function with another argument


// Example 2: Function with Default Parameters
javascript
function weatherReport(condition = "Sunny") {
    console.log(`Today's weather is ${condition}.`);
}

weatherReport(); // Uses default value "Sunny"
weatherReport("Rainy"); // Overwrites default value with "Rainy"


//  Example 3: Using Rest Parameters (Handling Multiple Arguments)
javascript
function listPlayers(...players) {
    console.log(`Team Players: ${players.join(", ")}`);
}

listPlayers("Messi", "Ronaldo", "Neymar", "Mbappe");


//  Example 4: Function That Sums Multiple Numbers (Rest Parameters)
javascript
function sumNumbers(...numbers) {
    let total = numbers.reduce((sum, num) => sum + num, 0);
    console.log(`Total Sum: ${total}`);
}

sumNumbers(10, 20, 30, 40, 50);


// Example 5: PRACTICE Function – Price Discount Calculator
javascript
function calculateDiscount(price, discount = 10) {
    let finalPrice = price - (price * (discount / 100));
    console.log(`Final Price after ${discount}% discount: $${finalPrice}`);
}

calculateDiscount(100); // Uses default 10% discount
calculateDiscount(100, 20); // Uses custom 20% discount
 //  Example of Conditional Statement

let score = 85;

if (score >= 90) {
    console.log("Excellent! You got an A!");
} else if (score >= 80) {
    console.log("Great job! You got a B!");
} else if (score >= 70) {
    console.log("Good effort! You got a C!");
} else {
    console.log("Keep working hard! You can do better next time!");
}


// Example of User Authentication Using Conditional Statement

let username = "Habib";
let password = "securePassword123";

// Simulating user input
let enteredUsername = "Habib";
let enteredPassword = "securePassword123";

if (enteredUsername === username && enteredPassword === password) {
    console.log("✅ Login successful! Welcome back, " + username + "!");
} else if (enteredUsername !== username) {
    console.log("❌ Error: Username not found!");
} else if (enteredPassword !== password) {
    console.log("❌ Error: Incorrect password!");
} else {
    console.log("⚠ Something went wrong. Please try again!");
}

// Example of a Switch Statement

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("🔷 Start of the week! Stay focused!");
        break;
    case "Tuesday":
        console.log("🔷 Another productive day ahead!");
        break;
    case "Wednesday":
        console.log("🔷 Midweek grind! Keep pushing!");
        break;
    case "Thursday":
        console.log("🔷 Almost Friday! Stay strong!");
        break;
    case "Friday":
        console.log("🔷 Weekend vibes loading!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("🔷 Relax and recharge!");
        break;
    default:
        console.log("❌ Invalid day entered!");
}


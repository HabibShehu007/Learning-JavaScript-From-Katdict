// Example 1: Basic while Loop (Counting from 1 to 5)

let count = 1;

while (count <= 5) {
    console.log(`Count: ${count}`);
    count++; // Increase count
}


// Example 2: do while Loop (Runs at least once before checking condition)

let num = 1;

do {
    console.log(`Number: ${num}`);
    num++;
} while (num <= 5);


// Example 3: Using while to Validate User Input

let input;

while (input !== "yes") {
    input = prompt("Type 'yes' to continue:");
}

console.log("You entered 'yes', moving forward!");

// Example 4: Loop Control – break Statement (Stopping the loop when condition is met)

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at 5!");
        break; // Exit loop completely
    }
    console.log(`Iteration: ${i}`);
}

// Example 5: Loop Control – continue Statement (Skipping specific iterations)

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(`Odd number: ${i}`);
}



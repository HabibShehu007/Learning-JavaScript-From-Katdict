// Example of Basic Loop (Counting from 1 to 10)

for (let i = 1; i <= 10; i++) {
    console.log(`Count: ${i}`);
}


// Example 2: Looping Through an Array (Betting Platforms)

let platforms = ["Bet9ja", "SportyBet", "MSport", "NairaBet"];

for (let i = 0; i < platforms.length; i++) {
    console.log(`Platform: ${platforms[i]}`);
}


// Example 3: Countdown Using a for Loop

for (let i = 5; i >= 1; i--) {
    console.log(`Countdown: ${i}`);
}

// Example 4: Nested Loops (Multiplication Table)

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Example 5: Loop with Conditional Execution (Skipping Even Numbers)

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(`Odd number: ${i}`);
}

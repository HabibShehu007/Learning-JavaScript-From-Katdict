// Example 1: Global vs. Local Scope
javascript
let globalVar = "I’m accessible anywhere!"; // Global scope

function checkScope() {
    let localVar = "I only exist inside this function."; // Local scope
    console.log(globalVar); 
    console.log(localVar); 
    
}

checkScope();
console.log(globalVar); 
console.log(localVar); 

// Example 2: Function Creating Private Scope
javascript
function privateCounter() {
    let count = 0; // Local variable inside the function
    return function () {
        count++; // Can access 'count' even after parent function has executed
        console.log(`Current count: ${count}`);
    };
}

const counter1 = privateCounter();
counter1(); 
counter1(); 
counter1(); 
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to factorial!");

function factorial(n) {
    let fact = 1
    if (n < 0) {
        return console.log("number should be positive")
    }
    else {
        for (let i = 1; i <= n; i++) {
            fact *= i
        }
        console.log("factorail of ",+ n + ' is', fact)
    }
}

factorial(5)
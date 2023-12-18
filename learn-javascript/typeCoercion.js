// implicit type coercion in javascript 
// implicit type coercion in javascript is the automatic type coercion of value from one data type to another.
// it takes place when the operands of an expression are of different data types.

let a = 4;
let b = 3;
let c = '2'

console.log("a:", a)
console.log("b:", b)
console.log("c:", c)

console.log("a + b =", a + b)
// implicit type coercion and concate the string
console.log("a + c =", a + c)
// implicit type coercion and subtract the value 
console.log("a + c =", a - c)

// Boolean coercion 
let x = 0;
if (x) console.log(x) //this will not print beacuse 0 return false

let y = 1;
if (y) console.log(y) //this will print y values 
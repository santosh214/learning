// == vs === 
// both are comparison operator to check the values
//  === is used to check values with value type

const ab = 1
const bc = 1
const cd = '1'

console.log("ab == bc", ab == bc) //true
console.log("ab == cd", ab == cd) //true

console.log("ab === bc", ab === bc) //true
console.log("ab === cd", ab === cd) //false because it is comparing both value and type


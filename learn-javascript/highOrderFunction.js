// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.


//call high order function
const ab = highOrderFunction('hello')

// declare function
function highOrderFunction(func) {
    return function () {
        console.log('high order function', func)
        
    }
}

console.log("ab:", ab())
// decaler another function
function hello() {
    console.log("hello")
}

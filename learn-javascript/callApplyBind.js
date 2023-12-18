// The difference between Call, Apply and Bind can be explained with below examples,


// Call: The call() method invokes a function with a given this value and arguments provided one by one
let employee1 = {
    name: 'santosh',
    age: 28
}
let employee2 = {
    name: 'sudhir',
    age: 29
}

function invite(grt1, grt2) {
    console.log("grt2:", grt2)
    console.log("grt1:", grt1)
    // console.log(grt1 + " " + this.name + " " + grt2 + " " + this.name)
    // console.log("this:", this)
}


invite.call("Hello", "How are you")
// invite.call(employee2, "hello", "what are you doing")

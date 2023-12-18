// for loop 
let array = [1, 4, 2, 8, 9]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log("element:", element)

}


// for of loop 
//  for of  loop is used to loop  through the values of an object like array or strings
//  it allows you to  access each values directly  without having to use an index
console.log("for of loop:")
let _name = 'santosh'
for (let ab of array) {
    console.log(ab, "for of loop")
}


// for in loop 
//  For in loop is used  to loop through the properties of an object
//  it allows you to iterate   over the keys of an object and access the values associated with those keys
console.log("for in loop:")
let obj = {
    name: 'santosh',
    age: '26',
    gender: 'male'
}

for (let a in obj) {
    console.log(obj[a])
}

for (let n in _name) {
    console.log("for in loop----", _name[n])
}
for (let n in array) {
    console.log("=----for in loop----", array[n])
}



//  foreach loop 
console.log("for each loop")

// for each is a method available on arrays or object  that allows you to iterate over each element of the array and perform some action on each element

let _forEachLoop = [8, 23, 1, 6, 4]
let _forEachObject = {
    name: 'santosh',
    age: '26',
    gender: 'male'
}


_forEachLoop.forEach((e) => {
    console.log(e, 'foreach loop iteration')
})
Object.values(_forEachObject).forEach((e, i) => {
    console.log("i:", i)
    console.log(e, 'foreach object iteration')
})

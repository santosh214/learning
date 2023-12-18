// primitive types are immutable and its always  create deep copy 


// let developer1 = {
//     name: 'santosh'
// }

let developer1 = {
    name: 'Santosh',
    skills: {
        primary: 'full stack'
    }
}

// let developer2 = developer1    
// let developer2 = Object.assign({},developer1) //1st reference      
let developer2 = { ...developer1 }  //2nd refernce

// developer2.name = 'kartik'
developer2.skills.primary = 'frontend'


console.log("SHALLOW COPY")
console.log("A shallow copy refers to creating a new object  or array that has the same properties or elements as the orginal object or array. However, if the original object or array contains nested objects or arrays, the shallow copy will still reference the same nested objects or arrays. Therefore, modifying the nested objects or arrays in the shallow copy will also affect the original object or array.")
console.log(developer1)
console.log(developer2)



//deep copy 
console.log("DEEP COPY")
let developer3 = {
    name: 'Pawan',
    skills: {
        primary: 'Full stack'
    }
}

let developer4 = JSON.parse(JSON.stringify(developer3))

developer4.skills.primary = 'Frontend'
developer4.name='Mayank'

console.log("developer3:", developer3) //developer 3
console.log("developer4:", developer4)

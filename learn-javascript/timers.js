setTimeout(() => {
    console.log("settimeout 2000")
}, 2000);

const ab = setInterval(() => {
    console.log("setInterval 2000")
}, 2000);

setTimeout(() => {
    
    clearInterval(ab)
}, 5000);
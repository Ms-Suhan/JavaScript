console.log(Math)

// console.log(Math.abs(-6)) // Mod of number --> 6
// console.log(Math.round(4.7)) // round off to near integer value --> 5
// console.log(Math.ceil(5.2)) // Gretest integer function --> 6
// console.log(Math.floor(4.9)) // lowest integer to provided number --> 4
// console.log(Math.min(2,8,9,1)) 
// console.log(Math.max(2,8,9,1))


console.log(Math.random())
console.log((Math.random() * 10 )+ 1) // get values ranging 1 - 9
console.log(Math.floor(Math.random()*10) + 1) // generally used with Math.floor for gettig roundoff values



// for getting random values between range

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // values between 10-20
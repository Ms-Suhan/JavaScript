let score = "23suhan"
let score2 = null

console.log(typeof score)
console.log(typeof(score))

let No = Number(score)

console.log(No)
console.log(typeof No)
// many times when we convert a non pure number to number it will get converted and 
// also shows typeof as number but it is acutally not a number NaN


let No2 = Number(score2)
console.log(typeof No2)
console.log(No2)
// Number() converts the 
// null --> 0; false --> 0; true --> 1


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// "" --> false
// "something" --> true
// 1 => true; 0 => false
const score = 100;
console.log(typeof score)

 const balance = new Number(123.56)
 // we get many properties through __ptoto__
console.log(balance)

// console.log(balance.toString().length)

console.log(balance.toFixed(2)) // numbers after decimal
console.log(balance.toPrecision(4)) // Precision of number 


const hundreds = 1000000

console.log(hundreds.toLocaleString()) 
// 1,000,000 commas based on the us no system

// for indian number system pass parameter as 'en-IN'
console.log(hundreds.toLocaleString('en-IN')) 
// 10,00,000
"use strict" // treat all Js code as newer version

// alert(3 + 3) // we are using node not browser

/*
console.log( 3 + 
    3
)

console.log("hi"); console.log ("hello")


Note: "Avoid this lowers code readablility"
*/


//Primitive Data types in ecma script standards

// number => randge 2 to power 53
// bigint => large number 
// string => ""
// boolean => true/false
// null => standalone value ,representation on a empty value
// undefined => 
// symbol => used for uniqueness

let name = "suhan";
let age  = 25;

console.log(typeof age)
//typeof operator returns object of objects passed

// Note : "for typeof null" it returns object, which is an shortcomming of js
console.log(typeof null) // object which is not correct
console.log(typeof undefined) // undefined

//object
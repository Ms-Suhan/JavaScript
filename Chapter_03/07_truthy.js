const userEmail = "suhan@google.com"


if(userEmail){
    console.log("Got user email")

}else {
    console.log("No user email")
}

//Falsy values

// false, 0, -0 , "", null, undefined, BigInt 0n, NaN

// Truthy values
// true, "0", "false", " ", [], {}, function(){}


// Nullish Coalescing Operatot (??): null, undefined

let val1;
val1 = 5 ?? 10;

//if first value is null/undefined then 2nd value is assigned;


// Terinary Operator

// condition ? true : false

const price = 100

const resutl = price>=80 ? "less than 80" : "greater than 80"
console.log(resutl)
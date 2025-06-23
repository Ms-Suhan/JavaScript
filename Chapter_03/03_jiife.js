// Immediately Invoked Function Expression (IIFE)
// Many times we write variables inside global scope and 
// we want to immediatly call an function and we dont want that global variables to pollute the function
// thats why we use iffe

// Named iffe
(function iffe(){
    console.log(`DB CONNECTED`)
})(); // semi colon is nessesary to end the context bcz iffe dosen't know where to end the context



//unamed iffe
((name) => {
    console.log(`DB CONNECTED ${name}`)
})("suhan")

// we can also use arrow function and pass arguments




// ()() --> first one for function definition and second one for execution
/*
Question: Why do we use iffe?

    Sometimes we don't want our function to be polluted by global variables and immediatly execute the function 

*/
// Singleton
// Object.create()

// Object Literal

const mySym = Symbol("key1") //symbol declaration

const jsUser = {
    name : "Suhan",
    [mySym] :  "myKey1", // this is an symbol 
    "full name": "Ms Suhan",
    email: "mssuhan7@gmail.com",
    location: "banglore",
    lastLoggedIn: ["Monday", "Thursday"],
    greeting: function(){
        console.log("Welcome user")
    }
}


console.log(jsUser.name)
console.log(jsUser["name"])

// console.log(jsUser.full name) // error should be acessed using []notation
console.log(jsUser["full name"])
console.log(typeof jsUser[mySym])
// console.log( jsUser)

jsUser.location = "mudigere"
// Object.freeze(jsUser)
jsUser.location = "banglore"
console.log(jsUser)

jsUser.greeting2 = function(){
    console.log(`Welcome user ${jsUser.name}`)
}

console.log(jsUser.greeting2())
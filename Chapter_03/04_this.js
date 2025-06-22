function greeting(){
    console.log(this.username)
}

const user = {
    username: "suhan",
    price: 199,
    // welcomeMessage: function(){
    //     console.log(`${this.username}, welcome to website`)
    // }
    welcomeMessage: greeting
}
// this keyword provied the current context
// here the context is user 

//in node runtime environment this context is {}
// in brouser this context is "Window"


user.welcomeMessage()
console.log(this)


const func = function() {
    let username = "suhanms";
    console.log(`${this.username}, welcome to website`)
}// undefined, welcome to website **bcz** fuction doesnt provide this context

// but arrow functions differ in this: arrow functions inherit this from the parent scope at the time they are defined

const fun = () => {
    let username = "hitesh";
    console.log(this.username)
    console.log(this)
}
fun()


//Normal declaration Explicit
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }


//
// const addTwo = (num1, num2) => return num1 + num2 
// no need of {} if written in one line

// Implicit return
// const addTwo = (num1, num2) => (num1 + num2)
//no need for return if written in ( )

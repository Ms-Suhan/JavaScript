// const user = {
//     username: "suhan",
//     loginCount: 4,
//     isLoggedIn: true,

//     getUserDetails: function(){
//         // console.log('Got user Details from database')
//         console.log(this.username)
//         console.log(this)// provides current context which is user object
//     }
// }


// console.log(user.getUserDetails())
// console.log(this) // provides {} in brouser Window 


function user(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new user('suhan', 23, true)
const userTwo = new user('ms', 5, false)

// if we use user function witout new constructor function values will be overridden
// new constructor fucntion provides a new context or use to make new instance 
/* 
    STEP-01 :- Object created
    STEP-02 :- contructor function is called bcz of new keyword
    STEP-03 :- all arguments are injected inside this
    STEP-04 :- we get the instance
*/

console.log(userOne)
console.log(userTwo)



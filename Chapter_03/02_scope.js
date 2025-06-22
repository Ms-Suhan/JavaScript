const name = "suhan"
const age = 12

function accout(userName){
    console.log(age)
    if(true){
        console.log(userName)
        let userloggedin = "inside"

    }
    console.log(userloggedin)
}
{} // => this is know as scope 

console.log(addOne(2)) // No error altough the function is defined after function call



function addOne(num){
    return num + 1
}

 console.log(addTwo(2)) // error bcz function is defined as variable which cannot be hoisted
const addTwo = function(num){
    return num + 2
}
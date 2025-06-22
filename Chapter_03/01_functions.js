function username(user){
    if(!user){
        console.log("please provide an username")
    }
    return `${user} logged in`

}

console.log(username("suhan"))

// when we have n number of arguments we use ...variable_name (rest) operator

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,355,2400));


function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}


const user = {
    username: "suhan",
    price: 1233
}

handleObject(user)
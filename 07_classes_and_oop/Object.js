const multiplyBy5 = function(num){
    this.num = num // this is injected inside the multiplyBy5 this context but we can access and use cannot see
    return num * 5
}

// in js fucntion are also objects
// multiplyBy5.power = 2

// console.log(multiplyBy5(3))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)



const createUser = function(name, price){
    this.name = name
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++
    // return this.price
}

createUser.prototype.printPrice = function(){
    console.log(this.price)
}


// const user1 = createUser("chai", 25) here without new keyword the increment and printPrice function are add to prototype but not known to function thats why we use new keyword
const user1 = new createUser("chai", 25)
const user2 = createUser("coffee", 50)

user1.increment()
user1.printPrice();
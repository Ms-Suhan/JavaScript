// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword = function(){
//         console.log(`Password encrypted ${this.password + 'abc'}`)
//     }
// }

// const userOne = new User('suhan', 'suhan@gmail.com', '123')
// const userTwo = new User('ms', 'ms@gmail.com', '456')

// userOne.encryptPassword()

// User.prototype.changeUserName = function(){
//     return this.username.toUpperCase()
// }

// console.log(userOne.changeUserName())



// Behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    console.log(`Password encrypted by fn ${this.password + 'tap'}`)
}

User.prototype.changeUserName = function(){
    return this.username.toUpperCase()
}

const userOne = new User('suhan', 'suhan@gmail.com', '123')

userOne.encryptPassword()
console.log(userOne.changeUserName())
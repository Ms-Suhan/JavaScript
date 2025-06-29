let heros = ["ironman", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpdierPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.suhan = function(){
    console.log(`Suhan is present in all objects`)
}


// heroPower.suhan()
// heros.suhan()

// Inheritance

const user = {
    name: 'suhan',
    email: 'mssuhan@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// console.log(TASupport.__proto__.isAvailable)

Teacher.__proto__ = user  // Outdated

// Modern Syntax

Object.setPrototypeOf(TASupport, Teacher)


String.prototype.trueLength = function(){
    
   console.log(this.trim().length)
}

let userName = 'suhan  '

userName.trueLength()


const setUserName = function(username){
    this.username = username;
}

const createUser = function(username, email, password){
    setUserName.call(this,username)

    this.email = email
    this.password = password
}

const newUser = new createUser('suhan', 'ms@gmail.com', '123')

console.log(newUser)
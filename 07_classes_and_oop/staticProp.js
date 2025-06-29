class User {
    constructor(username, email){
        this.username = username
        this.email = email
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123 `
    } // static method cannot be accessed outside while execution by user
}

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const userOne = new Teacher('suhan', 'iam@gmail.com', '1234')

console.log(userOne)
// console.log(userOne.createId()) // error static method 

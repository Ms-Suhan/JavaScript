class User {
    constructor(username, email){
        this.username = username
        this.email = email
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, department){
        super(username)
        this.department = department

    }

    addCourse(){
        console.log(`New course is added by ${this.username}`)
    }
}



// const userOne = new User('suhan', 'ms@gmail.com')

const teacherOne = new Teacher('suha1n', 'cs')

teacherOne.logMe()

console.log(teacherOne instanceof User)
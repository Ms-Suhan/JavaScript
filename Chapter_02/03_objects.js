const obj = {}

obj.name = "suhan"
obj.age = 23
obj.username = {
    fullname: {
        firstname: "suhanms",
        lastname: "ms"
    }
}


console.log(obj.username.fullname.firstname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

//merging objects  using assign 
// {} as first argument is optional but generally a good practice as following objects as assign to empty rathe than passing obj1 to which following objects are copied
const obj4 = Object.assign({}, obj1, obj2, obj3)

const objSpread = {...obj1, ...obj2, ...obj3}

console.log(obj4)
console.log(objSpread)

const dbResult = [
    {
        id : 1,
        email: "suhan@google.com"
    },
    {
        id : 2,
        email: "suhan2@google.com"
    },
    {
        id : 3,
        email: "suhan3@google.com"
    }
]

// acessing object form array of objects

console.log(dbResult[1].email)

//getting only keys or values through object

console.log(Object.keys(obj)) // return array of all the keys
console.log(Object.values(obj)) // return array of all the values

console.log(Object.entries(obj)) // return the key value pair in array of array
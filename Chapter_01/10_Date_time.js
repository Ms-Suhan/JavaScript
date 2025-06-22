let myDate = new Date()

// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// // console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.getDate())


// let myCreatedDate = new Date(2025, 0, 23)
// let myCreatedDate = new Date(2025, 0, 23, 7, 30)
// let myCreatedDate = new Date("2025-01-14")
// let myCreatedDate = new Date("01-14-2025")
// let myCreatedDate = new Date("06-03-2002")
// console.log(myCreatedDate.toString())


let myTimeStamp =  Date.now()
let myCreatedDate = new Date("01-23-2025")

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(myCreatedDate.getTime()/1000))


let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long"
}) // --> specify more about toLocaleString()
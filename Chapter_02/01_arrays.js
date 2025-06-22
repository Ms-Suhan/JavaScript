const newArr = [0, 1, 2, 3, 4, 5];

// console.log(newArr)
// newArr.pop()
// console.log(newArr)
// newArr.push(5)
// console.log(newArr)

// const sliceArray = newArr.slice(1,4)
// console.log(sliceArray)

//slice opertaion returns the part of the array eg: (1,5) here 1 is included but 5 is not included
//original array is not changed

console.log(newArr)
// const spliceArray = newArr.splice(1,4)
// console.log(spliceArray)
// console.log("after splice ",newArr)


// splice removes the elements from the array and inserts if nesessary 
// original array is changed 


const newArr2 = ["suhan", "ms"]

const arr = newArr.concat(newArr2)
console.log(arr)

// SHALLOW COPY (SPREAD OPERATOR)

const shallowArray = [...newArr, ...newArr2]
console.log(arr)


//FLAT 

const another_array = [1, 5 ,9, [2, 6, 9], 7, [23, 8, [78, 90]]]

const another_real_array = another_array.flat(3)

console.log(another_real_array)

// is array

console.log(Array.isArray("suhan"))
console.log(Array.from("suhan"))
console.log(Array.from({name: "suhan"})) //interesting

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3))

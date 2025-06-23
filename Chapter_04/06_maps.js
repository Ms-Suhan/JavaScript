const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const result = nums.map((num) => num + 10)
const result2 = nums.filter((num) => num + 10) // in filter only the elements satisfiying the condition are returned 
// but in map each element is accessed and the given opertaion is performed and returned 

const result3 = nums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num > 50)
// methods can be chained, result of first method is passed into next method



// console.log(result)
// console.log(result2)
console.log(result3)
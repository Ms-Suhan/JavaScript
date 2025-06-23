let myarr = [1,2,3,4,5]
for(const num of myarr){
    // console.log(num)
}


// Map

let map = new Map();

map.set("name", "suahn")
map.set("age", 23)
map.set("city", "mudigere")

// console.log(map)

for(const [key,value] of map){
    // console.log(key,value)
}

const myObj = {
    "game1": "NFS",
    "game2": "COD",
    "game3": "spiderman"
}

// for(const [key,value] of myObj){
//     console.log(key, value)
// }

// error Not iterable



// for (const key in map) {
//     console.log(key)
//                                                  --------> Not iterateable
// }
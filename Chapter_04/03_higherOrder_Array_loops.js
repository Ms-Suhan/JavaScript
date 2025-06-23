const myObj = {
    js: "javascript",
    cpp: 'c++',
    rb: 'ruby'
}

for (const key in myObj) {
    // console.log(`${key} is for ${myObj[key]}`)
}


const myarray = ["js", "py", "rb", "java"]

for(const key in myarray){
    console.log(myarray[key])
}
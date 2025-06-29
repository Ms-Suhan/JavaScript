// const promiseOne  = new Promise(function(resolve,reject){
//     // Do async task
//     // DB calls, cryptography, network
//     setTimeout(() => {
//         console.log('Async task resolved')
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log('Promise One consumed')
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2 resolved')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Async 2 consumed')
// })


// const promiseThree = new Promise(function(resolve,reject){
//     resolve({name: 'suhan', email: 'suhan@brewtech.com'})
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject){
//    let error = true;
//    if(!error){

//        resolve(user.uername)
//    }else{
//     reject('error occurred`')
//    }
// }).then(function(username){
//     return username
// }).then(function(username){
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// })
// .finally(() => {
//     console.log('Promise is either resolved or rejected')
// })

// async function consumePromiseFive() {
//     try{
//         const respone = await promiseThree
//     console.log(respone)
//     }catch(error){
//         console.log(error);
        
//     }
// }

// consumePromiseFive()

async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // console.log(response)
        const data = await response.json() // this also takes time so await
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
}).finally(
    console.log('data fetch successfull')
)
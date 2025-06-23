const temp = 200;

if(temp > 150){
    console.log("Temprature is above 150")
}
else {
    console.log("Temperatur is befow 150")
}

// if(temp >= 200) console.log('test'); // Implicit scope one liner but there is a method

// if(temp >=120) console.log("test"), // Implicit code in mudltiple line ****Immature code*****
// console.log('test passed');


const balance = 1000



if(balance < 500 ){
    console.log("less than 500")
}else if(balance <  750 ){
    console.log("less than 750")
}else if(balance <  900 ){
    console.log("less than 750")
}else {
    console.log("Balance is less greater then 750")
} 


// && and ||

const userLoggedIN = true;
const hasDebitCard = true;

if(userLoggedIN && hasDebitCard){
    console.log("You can make the purchase")
}

const gmaiLogin = true;
const googleLogin = false;

if(gmaiLogin || googleLogin){
    console.log("user logged in")
}

// Switch case

const month = 3;

switch(month){
    case 1: 
        console.log("Jannuary")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    default:
        console.log("Enter valid month")
        break;
}




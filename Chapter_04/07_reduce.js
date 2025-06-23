
const array = [1, 2, 3, 4]

const initialValue = 0;

const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue

)

// accumulator is an empty variable provided in first iteration initialvalue is assigned to accumulator, initialValue is used only in first iteration
// in second iteration the result is passed to accumulator

// console.log(sumWithInitial)

const shoppingCart = [
    {
        itemName: "js",
        price: 499
    },
    {
        itemName: "python",
        price: 599
    },
    {
        itemName: "DSA",
        price: 10000
    }
]

const cartTotal = shoppingCart.reduce((acc, curr) => acc + curr.price, 0)
console.log(cartTotal)
// 

const myArray = [1, 2, 3, 4, 5, 6, 7, 8,]


// const result = myArray.forEach((item) => {
//     // console.log(item)
//     return item
// })

// console.log(result)

//forEach dosent return the value thus we use filter


// const result = myArray.filter((item) => {
//     return item > 5
// })

// console.log(result) // returns array with elements satisfing the condition

const books = [
    { title: "The Great Gatsby", genre: "Fiction", publish: "1925", edition: "1st" },
    { title: "1984", genre: "Dystopian", publish: "1949", edition: "1st" },
    { title: "To Kill a Mockingbird", genre: "Fiction", publish: "1960", edition: "50th Anniversary Edition" },
    { title: "Moby-Dick", genre: "Adventure", publish: "1851", edition: "Penguin Classics" },
    { title: "War and Peace", genre: "Historical Fiction", publish: "1869", edition: "Oxford World's Classics" },
    { title: "Pride and Prejudice", genre: "Romance", publish: "1813", edition: "Everyman's Library" },
    { title: "The Catcher in the Rye", genre: "Fiction", publish: "1951", edition: "Harper Perennial" },
    { title: "The Hobbit", genre: "Fantasy", publish: "1937", edition: "Deluxe Edition" },
    { title: "The Book Thief", genre: "Historical Fiction", publish: "2005", edition: "Hardcover" },
    { title: "The Road", genre: "Post-apocalyptic", publish: "2006", edition: "Trade Paperback" }
  ];
  
 
// const userBooks = books.filter((book) => book.genre == "Fiction")
const userBooks = books.filter((book) => book.publish > 2000)

console.log(userBooks)
  



// Java script is loose typed programming language , Dynamiclly typed 
// which means there is no need to specify any data type while assinging values to the variable

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id == anotherId) // false 

// symbol ka main kaam yahi hi ki unique identification karta hi isi liye id aur anotherId same nahi altough input string '123' same hi dono ki\
// Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, 
// Symbols are called "atoms". The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.
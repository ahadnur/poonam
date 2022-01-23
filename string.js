// Strings
// Escape Character
const string = "this is a \"string\""


let secondString = 'this is \'another\' string'
let anotherString = `This string is "coming" from backticks`


// JavaScript Strings as Objects with new
let objectString = new Number(100)

// let, var vs const

// String Methods
// Length
const address = "baker street, London"
// console.log(address.length)


// slice(start, end) --> slice() extracts a part of a string and returns the extracted part in a new string.
let ourString = "This is our string for slice"
// console.log(ourString.slice(0, 10))

// substring(start, end) --> substring() cannot accept negative indexes
let string2 = "this is for substring"
// console.log(string2.substring(1,3))


// substr(start, length) --> The difference is that the second parameter specifies the length of the extracted part.
let string3 = 'this is from substring '
// console.log(string3.substr(0, 4));

// Replacing String Content --> replace
let string4 = 'I love linux'
// string4 = string4.replace("linux", 'unix')
// console.log(string4);

// Converting to Upper and Lower Case
let str5 = 'this is for upper and lower case'
let strUpper = str5.toUpperCase()
let strLower = strUpper.toLowerCase()
// console.log(strLower);

// String Templates --> +, ",", $
let f1 = "John"
let f2 = "Doe"
// console.log(f1 + " " + f2)
// console.log("My first friend's name is : ",f1,"My second friend's name is :", f2)
// console.log(`My first friend's name is ${f1} My second friend's name is ${f2}`)


// Search Methods
// String indexOf()
let str6 = "this is for indexOf"
console.log(str6.indexOf())

// String lastIndexOf()
let str7 = 'I love my country'
// console.log(str7.lastIndexOf("my"));

// String startsWith()
let str8 = "I love to code"
// console.log(str8.startsWith('I'));

// String endsWith()
let str9 = "I need to sleep"
// console.log(str9.endsWith("p"));

// String search()
let str10 = "This is your new task"
// console.log(str10.search("is"));


// String includes()
let str11 = "this is the last srting"
console.log(str11.includes("name"));


// create as much as variables you can with let, var and const. Must have to be const in your code.
// Apply all the methods with your string..


// Array --> An array can hold many values under a single name, and you can access the values by referring to an index number.


let cars = ['book', 'pen', 'table', 3, 9]
// console.log(typeof cars);

// string
// number
// object
    // -> Array
    // --> null
    // --> undefined
    // --> Nan


// Creating an Array
// let cities = ['Toronto', 'New York', 'Los Angles']
// let cities2 = ['Los Angles', 'Toronto', 'New York', 'Bangladesh']
// let cities3 = ['Los Angles', 'Toronto', 'New York', 'Bangladesh', 'UK', 'Singapore']



// Using the JavaScript Keyword new
let countries = new Array('Japan', 'India', "USA");
// console.log(countries);

// Accessing Array Elements
// console.log(cities[0]);


// Changing an Array Element
// cities[10] = "Argentina"
// console.log(cities[10]);


// Array Properties and Methods
// length
// console.log(cities.length)

// sort() --> By default, the sort() function sorts values as strings.
let nums = ['c', 'b', 'l', 'a', 'u']
let sortedNums = nums.sort()
// console.log(sortedNums);

// Adding Array Elements
// cities[10] = "Argentina"
// cities[3] = "Cambodia"
// console.log(cities[3]);

// How to Recognize an Array
let cities = ['Toronto', 'New York', 'Los Angles']
let str = 'this is a string'
// Array.isArray()
// console.log(Array.isArray(str));
// instanceof
// console.log(str instanceof Array);


// ARRAY METHODS
// Popping and Pushing
// pop() --> pop() method removes the last element from an array. It returns the value that was "popped out"
// console.log(cities.pop());
// console.log(cities);

// push() --> The push() method adds a new element to an array (at the end). It returns the new array length
// cities.push("USA")
// console.log(cities);

// Shifting Elements
// shift() --> The shift() method removes the first array element and "shifts" all other elements to a lower index
cities.shift();
// console.log(cities);
// unshift() --> The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
cities.unshift('United Kingdom', 'Maldives');
// console.log(cities);
// Array elements can be deleted using the JavaScript operator delete
delete cities[1]
// console.log(cities);

// Merging Arrays
// concat() --> The concat() method creates a new array by merging (concatenating) existing arrays
let cities3 = ['Los Angles', 'Toronto', 'New York', 'Bangladesh', 'UK', 'Singapore']
// console.log(cities.concat(cities3));

// Splicing and Slicing Arrays
// The splice() method removes elements without leaving "holes" in the array
// console.log(cities3.splice(0, 3))
// console.log(cities3);

// The slice() method slices out a piece of an array into a new array.
// console.log(cities3.slice(0,4));
// console.log(cities3);

// Reversing an Array
// The reverse() method reverses the elements in an array.
// console.log(sortedNums);
// console.log(sortedNums.reverse())





// DIFFERENCE BETWEEN STRING AND OBJECT
let str = "this is a string"

let obj = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(){
        return `First name: ${firstName}, and last name: ${lastName}`
    }
}

// THIS IS THE STORY

/*
    Let's play a game.
    You have a class of students. Number of students are not defined. Students name is not defined. Now complete the tasks
        1. Now create an array of students ( name and numbers of students must be greater than 5).
        2. Print the length of the array in the console.
        3. Create another array of students with new Keyword
        4. Print the length of the current array in the console
        5. Find the differences between normal array and array with new method
        6. Sort the first array and print in the console like this (first character of the name must be capital letter):
            Sorted Students Name:
            1: name1
            2: name2
            3: name3
            ...
        7. Reverse the array and print in the console like this (first character of the name must be capital letter):
            Reversed Students Name:
            1. name1
            2. name2
            3. name3
            ...
    
    Now you do take care of backbencher students. Let's check their exam papers first:
        8. Call the last student and print the name in the console:
            Hey [name], you did a greate job.
    
        9. At this time a new student just join the class. Now add him/her to the array at the last. And print the array Like this:
            New student joined the class.
            Name is: [student name]

    Now you have changed your mind. You want to call from the first.
        10. Now call the first student of the class and print this to the console. Like this:
            Hey [name], you did as expectd.
        11. Now replace his place with another student and print the array to the console.
        12. Now create two groups of students with two array. And print the arrays in the console like this:
            Group Alpha: [name, name, name, ...]
            Group Beta: [name, name, name, ...]
        13. Now merge these two arrays into a single one and print the array to the console like this:
            Merged Groups: [name, name, ...]
    Now 3 students want's to leave the class.
        14. Now print 3 students name from the second name like this:
            These students will leave today:
            name1
            name2
            name3
    
    // this is all for todays story.. will continue next time...

*/

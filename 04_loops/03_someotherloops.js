// for of

const arr = [1,2,3,4,5,6];

for (const val of arr) {
    console.log(val);
}

// Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr',"France")
map.set('IN', "India")
map.set('NE', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);     // typical destructuring of array concept.
}

// this above forof syntax wont work on the JavascriptObject.

 // forIn loop

 const myObject = {
    Js : "Javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
 }

 for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
 }

const programming = ["js", "rb", "py", "c++", "java"];

for (const key in programming) {
    console.log(key);       // here we are getting index of array as the key for array are indexes.
    // (note it is because of forin loop and because we have written "key" inside the forin loop)
}


// maps are not iterable hence we cant use for in loop on them


for (const key in map) {
    console.log(key);     // maps not iterable.
}

// foreach

const coding = ["java", "ruby", "javascript", "python", "c++"]
// using normal function
coding.forEach( function (item) {
    console.log(item);
})

// using Arrow function 
// for each iteration of the loop the callback function gets 3 params item , index, arrlist
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

// we can also define a new funciton somewhere and pass the reference of the function in the foeeach loop.

const printMe = (item) => {
    console.log(item);
}
coding.forEach(printMe);
// remember we need to pass reference to the function not call that function here.



const myCoding = [
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "ruby",
        languageFileName : "rb"
    },
    {
        languageName : "Javascript",
        languageFileName : "js"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
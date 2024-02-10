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

 
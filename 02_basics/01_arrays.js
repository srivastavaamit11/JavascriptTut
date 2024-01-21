// array

const myArr = [0, 1, 2, 3, 4, 5]

// collection of multiple items of same and different types

// prototype of prototype kya hota 

// pop and unshift 

// unshift shifts all the values to the right and put the value at first place 
// shift removes the first element and shifts all teh elements 1 place left.

//  includes return boolean 
//  indexof return Number

 const newArr = myArr.join()

 console.log(newArr) // -> 0,1,2,3,4,5   this is a string separated by comma.
 

 // splice and slice.

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log("B ",myn1);

const myn2 = myArr.splice(1,3)
console.log("C ",myn2);

console.log("A ", myArr);

/*       ---------------  ----------   ------------ ----------- ------------ ----*/
// methods to add two array ?

const marvelHeroes = ['Loki', 'Kaori', 'CaptainCarter'];
const DcHeroes = ['Superman', 'Batman', 'Aquaman']

const allheroes = marvelHeroes.concat(DcHeroes);  
// marvelHeroes.push(DcHeroes)  // this will add the whole array from the argument at the end of existing array

console.log([
    allheroes,
    marvelHeroes
])


// Spread Operator.
const all_new_heroes = [...marvelHeroes, ...DcHeroes]
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[8,9,[6,7,4,[8,9,7]]]];
const real_anaother_array = another_array.flat(Infinity);  // here in flat we can put the depth till which we want to flat the array.
console.log(real_anaother_array);

let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log([
    Array.isArray("Amit"),
    Array.from("Amit"),
    Array.from({name: "amit"}),    // here it will return empty array because we have to specify on which value we want to create an array.
    Array.of(score1,score2,score3)
])



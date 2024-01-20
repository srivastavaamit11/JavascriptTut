console.log(null> 0)    // here null will be converted to zero hence false
console.log(null == 0);  // here null will not get converted hence null != 0 so false
console.log(null >= 0);  // here null will get connverted to 0 hence null satisfies the condition null > = 0.


// So 
// Comparisons convert null to a number treating it as 0.
// thats why (3) null >= 0 is true and (1) null > 0 is false. 

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);
console.log(undefined < 0);

// here all the  values will be false 

// strict check 
/* === used to compsre values and datatypes.

primitive and non primitive
call by value and call by reference.


*/
// 
// Primitive datatype
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt. 

//Non Primitive(reference)
//  Array, Objets, Functions

// javascript is dynamically typed

const id = Symbol('123')
const anotherId = Symbol('123');

console.log([id,anotherId, id === anotherId, id == anotherId]);


const bigNumber = 3456789345678456789n;
// use n in the last to simply make it a bigInt 

const heros = ["Shaktiman", "Naagraj", "doga"];
let myobj ={
    name : "amit",
    age : 23
}

// we can store function inside a varible

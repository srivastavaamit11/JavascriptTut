let score ="33"

console.log(typeof(score));

// const {score} = req.body // here we dont know whether the score that is coming 
// from the request is int value or string or boolearn eetc . hence we need to use type of to check 

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// what is the string was not pure number 
// it will still convert the string in nummber by assigning NaN in place of the number.
// so if you use typeof we get number as its type but it would be storing NaN instead.
// will convert null to 0;
// NaN -> NaN;

// use the table that was filled during training assessment.
// list the values that will be converted to false.


str1 = "hello"
str2 = " Amit"
str3 = str1 + str2


console.log("1" + 2 + 2) // -> 122(String)
console.log(1 + 2 + "2") // -> 32(string)
// left too right flow? we can say this.

// Dont depend on this instea use braces
console.log(+true); // -> converts true to value int 1

let x=3;
let y =x++;
let z= ++x;

console.log([x,y,z]);

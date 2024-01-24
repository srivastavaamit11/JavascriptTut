// truthy values in JS 
const userEmail = "Amit";
if(userEmail){
    console.log("got user email");
}
else{
    console.log("Don't have user eamil");
}

// falsy values 

// false, 0, -0, BigInt  0n, null, "", undefined, NaN

// truethy values except the above falsy values.

// "0" , 'false', " ", [] , {} , function(){} -> empty function

// for array -> if(userEmail.length === 0) (console.log("Array is Empty"));

// to deteect object is empty or not we use 
// if(object.key(emptyobj).length === 0) (console.log("empty Object"));

// false == 0 -> true
// 0 == '' -> true
// false == '' -> true


// Nullish Coalescing Operator (??) : null or undefined

let val1 ;
// val1 = 5 ?? 10;
val1 = undefined ?? 15
// similarirly undefined 
console.log(val1)

let val2 =NaN ??  undefined ?? null ?? 30;
console.log(val2);

// untill when we are not getting any more null or undefined values in our code we can continue ths chain.
// in other wrds this cahin will terminate at the next not null or not undefined value.

// we also have an operator named as ternary operator. which is compact form of in and else.




/* -----------------------------------------------------------------------------*/
/*

memories

-> stack memory -> primitive
-> heap memory -> non Primitive





*/

let myname ="Amit"
let brotherName = myname;

brotherName ="Sumit";

console.log([myname, brotherName]);

let userOne = {
    email: "hdgfgh@hdbhf.com",
    upi: "sgchgfs@vpa"
}

let userTwo = userOne

userTwo.email = "amit@gmail.com"

console.log([userOne, userTwo]);

// this is happening because the object memory is in heap and we are passing the same reference in both the variables
// so if we change one variable it will change the value at the origin and hence both the variable will have same updated data




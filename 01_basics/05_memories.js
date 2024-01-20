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

// this is happening because the object memory is in heap and we are passing hte same reference in both the variav=bles


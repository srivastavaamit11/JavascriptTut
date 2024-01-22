/* functions in javascript */ 

// function addTwoNumbers(number1, number2)
// {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2)        // during function  declaration num1 and num2 are called parameters.
{
    return (number1 + number2);             // nothing else will execute that is written after this line.
}

const result = addTwoNumbers(3,5);      // during the call of the function num1 and num2 are known as argument.
console.log("Result : ", result);


function loginUserMessage(username = "Sam Altman"){
    if(!username)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log([
    loginUserMessage("Amit"),
    loginUserMessage()
]);

// REST Operator in javascript

function calculateCartPrice(val1, val2, ...num1)   // the mapping of values is done and once it get to a place where the 
// frest operator is used it simply put the rest of the values as an array in the rest variable.
{
    return [val1, val2, num1];
}

console.log(calculateCartPrice(200, 300, 500, 2445));


// how to pass an object from the 
const user = {
    "username" : "amit",
    "price" : 1234
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    "username" : "amit123",
    "price" : 987
})

const myArry = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myArry));


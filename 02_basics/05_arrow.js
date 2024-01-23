// ?? Arrow Functions
// this -> current context ke baare mein batata hai 

const user = {
    username: "Amit",
    course : "JS tutorials",
    
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage();
console.log([
    user.welcomeMessage(),
    this,
    user.username ="Sam",
    this,
    user.welcomeMessage()
])
// user.username ="Sam";
// user.welcomeMessage()
/*
Amit , welcome to website   -> using this we are getting values in the current context
{                           -> here we are getting the values from the current context that is
  username: 'Amit',         ->  there inside the funciuton in the user object.
  course: 'JS tutorials',
  welcomeMessage: [Function: welcomeMessage]
}
Sam , welcome to website
{
  username: 'Sam',
  course: 'JS tutorials',
  welcomeMessage: [Function: welcomeMessage]
}
[ undefined, {}, 'Sam', {}, undefined ]  -> here the empty curly braces are there because 
                                         -> we are using this in the global context and there is no object to reference to.

*/

// now here we can see that we are getting empty braces fro this keyword 
// but if we run the same this keyword in the browser console then we will get window
// events there because the javascript running emgine is currently the browser,

// function chai (){
//   console.log(this);
// }
// chai();

// here we will find multiple values for this inside the function.
// but we cannot access the values that are inside the function using this.


const chai = () => {
  let username = "amit"
  console.log([
    this,
    this.username
  ])
}

chai()



/*           *//*          */
// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// implicit return arrow function
const addTwo = (num1, num2) => num1 + num2

const addThree = (num1, num2, num3) => (num1 + num2 + num3)

console.log([
  addTwo(2,3),
  addThree(1,2,4)
])

//  here to return an object using implicit return arrow function we have to use braces 
//  as for object we needed to use curly braces.


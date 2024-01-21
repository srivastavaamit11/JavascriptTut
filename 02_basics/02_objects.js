// object literals

const mySynm = Symbol("key");  // defined a symbol here now we will use this in our object



const JsUser = {
    name:"amit",
    age:23,
    [mySynm] : "key1",          // WE HAVE TO USE SQUARE BRACES IF WE WANT TO use symbols in object.
    location: "Delhi",
    email: "amitsiri42@hf.com",
    isLoggedIn: false,
    "last Login": ["Monday","Wednesday"]  // if the name contains space then we can only access the vbalue using square braces.
}

console.log([
    [typeof(JsUser["last Login"]),JsUser["last Login"]],
    [typeof(JsUser[mySynm]),JsUser[mySynm]],
    [typeof([mySynm]),[mySynm]],  //    [ 'object', [ Symbol(key) ] ]
    [typeof(mySynm),mySynm],      //    [ 'symbol', Symbol(key) ],
    JsUser["email"]
]);

// now suppose we want to freeze change in the values of the object we can do so by using freeze() on object .
// Object.freeze(JsUser)  // this will freeze the whole object from manipulation.

// suppose we want to freeze only a particular property inside the object we can do so as belo.
Object.defineProperty(
    JsUser, "name" , {
        writable : false,
        configurable : false
    }
)

JsUser.name = "Don";
console.log(JsUser);

// to add a function in the exixting object 
JsUser.greeting = function(name){
    console.log(`hello, ${name}`);
}

// console.log();

// suppose we want to use some of the present values from the object.
JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`)
}

console.log([
    JsUser.greeting("Amit"),
    JsUser.greetingTwo(),
    JsUser.greeting     // [Function (anonymous)] -> it is very beneficial while going forward in javascript.
])

// the extra undefined is coming due to the calling of the funtion as it doesnot have any return value 
// if the funciton was returning some value then instea of undefined we would ve getting some value there.

/*  ------- ----- ----- ----- --- -- ----- --- -- --- ----- ----- ---- ------ -------- ------- --------   */


// singleton objects?
// using constructor we can create singleton object

const bumbleUser = new Object();
bumbleUser.name = "amit"
bumbleUser.isLoggedIn = true
bumbleUser.age=23
bumbleUser.Id = "12345654321"

console.log(bumbleUser);

// we can make nested objects as well and that too till whatever level we want.
// and to access those values we can use dot(.) operator as we use or square bracket as well.
// console.log(regularUser.fullname?.userfullname.firstname);  -> here ? used to check whether the value is there or not 
// this (?) is helpful when we are getting data from API as we wont have to use any if condition to check for the values existence.

const obj1 = {1:'a' , 2:'b'}
const obj2 = {3:'c' , 4:'d'}

// const obj3 = { obj1, obj2} // this will create a new object whose elements are obj1 and obj2. -> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3 = Object.assign({} ,obj1, obj2);    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } the blank {} is treated as target object 
// and all the chnage are done in that object 
console.log([
    obj3,
    obj1
])

// if the empty object was not here then the obj1 will also undergo the same changes and we would be getting both the object {obj1 and obj3 as same}

// but we dont have to use all these as we have the spread operator that takes the elements and put them in a new object and returns it.

const obj4 = {...obj1, ...obj2}
console.log(obj4);

console.log([
    Object.keys(bumbleUser),   // [ 'name', 'isLoggedIn', 'age', 'Id' ] return an arrya on which we can use loop which will be helpful to us in production code.
    Object.values(bumbleUser),  // [ 'amit', true, 23, '12345654321' ]  
    Object.entries(bumbleUser),  // return array of key value pair for each property.  -> [ [ 'name', 'amit' ],[ 'isLoggedIn', true ],[ 'age', 23 ],[ 'Id', '12345654321' ] ]
    bumbleUser.hasOwnProperty('isLoggedIn')  // returns boolean value based on the condition.
])   

// isEnumerable property 

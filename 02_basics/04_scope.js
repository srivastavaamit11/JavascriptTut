let a = 10
const b = 30
var c = 30

// when curly braces comes in object it is not a scope 
// we treat curly braces as scope when it comes with function or conditional statement.
if(true){
    // let d = 10
    const e = 80
    var f = 100
}

console.log([
    a,
    b,
    c,
    // d,
    // e,
    f
])

// block scope is the scope inside the curly braces 

// nested scope 

function one(){
    const username = "amit"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    // two();
}

one();
// child can access properties of parent function but parent cant access props of child function.


/*   xxxxxx++++++++xxxxxxxxxxxxxxxxxxxxxxx ++++++++++++++++++++++++++*/

function addone(num){   // function declaration
    return num+1
}

addone(5);


const addtwo = function(num){  // function expression.
    return num+2;
}

addtwo(5);

// we cannot access function expression before 
// declaration while we can access function declaration before declaration. 




// if

// if(condition)    // here condition should be true -> we can have something to get the value evaluated.
// {  

// }

const isUserloggedIn = true;
const temperature = 41

if(temperature === 41)
{
    console.log("less than 50");
}
else{
    console.log("greater than 50");
}
 
const balance = 400;
// compact technique to use if 
if(balance< 500) console.log("test");       // here semicolon is important to end the scope in the same line.
// if we want to extend the scope to more than one line we can do it so by using comma (,) but it is for knoledge purpose only no need to use this in prod.
/*
if(balance< 500) console.log("less than 500"),
console.log("greater than 500");

if
elseif
else

now suppose we have many conditions to check so it is not feasible to use if else there hence we use switch case:
*/

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break; 

    default:
        break;
}




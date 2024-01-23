// Immediately Invoked Function Expressions (IIFE)

(function chai() {                      // named IIFE
    console.log(`DB CONNECTED`);
})();                                   // semicolon is necessary here to make the iife end here.

((name) => {                            // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('Amit');

// we use iife to reduce the global pollution 
// i.e, suppose we want a function to invoke as soon as it is declared,
//  we will write the function and immediately call it as the function definition ends,
//  but by doing so we will be creating a pollution of the calling of that function 
//  using this iife we dont have to write the extra line of calling that function and hence reducing global pollution.




// to explicitly define the type of variable we use new keyword.
const num =522.3423;
const balance = new Number(500)
console.log(balance);
const hundreds = 1000000;
console.log(balance.toString());
// now the balance is converted to string which gives it some additional properties.
console.log([
    balance.toFixed(2),
    balance.length,
    num.toPrecision(3), // it gives priority to the values before the decimal.
    hundreds.toLocaleString('en-IN'),  // by default uses US values but we can change that if we want.
])

/*   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   */
// abs
// round
// ceil
// floor
// sqrt
// pow
// random() -> gives values between 0 to 1 both inclusive




/* investigation wali learning */

const accountId = 144553   // Cannot be changed
let accountEmail = "amit@yopmail.com"  
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;   // if no value is assigned to a variable then undefined is stored inside it.
// accountId = 2  ->  Not Allowed

accountEmail = "hsbhd@jhf.vom"
accountPassword = "3738848434"
accountCity = "Delhi"


console.log(accountId);
console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
we dont use var -> it didnt knew about scope the code inside {} is known as scope 
so initially javascript doesnt understand the scope.

hence use const and let.

Prefer not to use Var ,
because if issue in block scope and functional scope.

the technique to assign the accountCity is not good try to avoid.

*/
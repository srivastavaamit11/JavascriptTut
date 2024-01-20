/* using strings modern syntax  i guess it will be inside the backticks */
let RealmsNumber = 9;
console.log(`Hello, I am the destroyer of the ${RealmsNumber} realms.`);
const gameName = new String('AmitPc')

const newStringOne = "    name    "
const url = "www.amit.sri/jemk%20kiop"
console.log([
    gameName[0],
    gameName.__proto__,
    gameName.length,
    gameName.toUpperCase(),
    gameName.charAt(2),
    gameName.indexOf('t'),
    gameName.substring(0,4),
    gameName.slice(-8,4),
    newStringOne.trim(),   // works on whitespace and linebreak.
    url.replace('%20','-'), // returns new string .
    gameName.includes('Pc'),
    url.split('-')

])

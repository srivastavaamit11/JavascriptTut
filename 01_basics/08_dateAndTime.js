let myDate = new Date();
let myDatedate = new Date(2024, 1, 29);



console.log([
    myDate,
    myDate.toString(),
])


console.log(myDatedate.toDateString());
let myTimeStamp = Date.now();

myDatedate.toDateString('default',{
    weekday: "long",
    timeZone: ""
})


console.log(myDatedate);


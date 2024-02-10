let MyArr = ["Fruits", "Vegetables", "Meat"];

let arr = 0;
while(arr < MyArr.length){
    console.log(MyArr[arr]);
    arr++;
}

do {
    console.log(MyArr[arr], arr)
    arr++;
} while (arr< arr.length);

// there are some case where we need to check the condition after first query is run.
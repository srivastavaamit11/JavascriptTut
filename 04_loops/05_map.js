// map

const mynumbers = [1,2,3,4,5,6,7,8,9]

const newNums = mynumbers
                    .map((num) => num * 10)      // this returned array will be passed to the next nested map.
                    .map((num) => num + 1)       // this returned array will be passed to next filter.
                    .filter((num) => num > 50)

console.log(newNums);


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    return x.reduce((acc, c) => acc + Number(c), 0)
    }

console.log(sumMix([1,2,3, "4", ]))
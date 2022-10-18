/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){

  let num = x.map(nums => Number(nums))
  
  return num.reduce((a,b) => a+b , 0)
}

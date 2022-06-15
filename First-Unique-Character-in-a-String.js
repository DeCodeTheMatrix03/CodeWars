/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1

*/

function repeatingString(s){
    // make an object that holds the letter and the amount of times it appears in the string
    letters = {}
    //iterate through the string 
    for (let i =0; i<= s.length; i++){
        let char = s[i]
        letters[char] = letter[char] + 1 || 1
    }
    // fill out the object with the amount of times a letter appears
    //iterate through each value
     for (let i =0; i<= s.length; i++){
         let char = s[i]
    // if the caharcter's value is 1 return the index
         if(letters[char] === 1){
             return i
         }
     }
    // if no character equals 1 return -1 
    return -1    
}

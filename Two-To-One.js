/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
//concat s1 and s2
  let combinedString = s1 + s2
//split them up into an array
  return [... new Set(combinedString.split(''))].sort().join('')
  //sort them
  //join them
}

//p : two strings
//r: return a combined string in order
// e: s1: abc s2: efg combined string: abcefg

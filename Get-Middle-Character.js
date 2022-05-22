/* #Input
Task:
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 -1) , s.length % 2 === 0 ? 2:1)
}

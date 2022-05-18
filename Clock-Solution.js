//Task Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.
//parameters include hour, minutes and seconds
function past(h, m, s){
  //this function can only run if hours is greater than 0 but less than 23, minutes and seconds is greater than 0 but less than 59
if (
0 <= h <= 23 &&
0 <= m <= 59 &&
0 <= s <= 59){
  //convert each value to milliseconds and add them up
  return (h * 3600000) + (m *60000) + (s*1000)
}
  
  else {}
}

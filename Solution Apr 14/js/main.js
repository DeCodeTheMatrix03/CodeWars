//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

function setAlarm(employed, vacation){
    if (employed === true && vacation === false){
      return true
    }
      else{
        return false
      }
    }
function accum(s) {
  // your code
  //P String of Letters
  //Return the uppercase letter with it repeating with the amount of index
  //Example (Joel) => J-Oo-Eee-Llll
  //Psuedo Code
  return s.split('').map((item, index) => (item.toUpperCase() + item.toLowerCase().repeat(index))).join('-')
}

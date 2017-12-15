// Double Char - ex: ('hello world') => ('hheelllloo  wwoorrlldd')

function doubleChar(str){
  var word = '';
  for (var i = 0; i < str.length; i++){
    word += str[i] + str[i];
  }
  return word;
}

// es6 version
const doubleChar = (str) => str.split("").map(c => c + c).join("");


/* Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 21445 Output: 54421 */

function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}


// remove spaces in a string and return the resultant

// option#1
function noSpace(x){
  var final = "";
  for(var i = 0; i < x.length; i++){
    // charAt(0) == 'H' from 'Hello'
    if(x.charAt(i) != ' '){
      final += x.charAt(i);
    }
  }
  return final;
}

// option 2
function noSpace(x) {
  var word = '';
  for(var i=0; i < x.length; i++){
    if(x[i] !== ' '){
      word += x[i];
    }
  }
  return word;
}

// option 3
function noSpace(x){
  return x.replace(/\s/g, '');
}

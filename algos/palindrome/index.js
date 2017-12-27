// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// Method 1 - Method helper

function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

// Method 2 - Manual

function palindrome(str) {
  let reversed = '';
  for (let character of str){
    reversed = character + reversed;
  }

  return reversed === str;
}

// Method 3 - Array Helper
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  [0, 10, 14] is 'every' value greater than 5?
  array.every((val) => val > 5);
*/

/*
  Steps:
    - Compare if array[0] and array[array.length-1] are same or not
    - Compare second element to second to last element of the array
*/

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length-i-1];
  });
}


module.exports = palindrome;
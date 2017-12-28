// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*
  Notes:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    
    const word = "HI THERE!!!!";
    // gets rid of !!! and spaces
    word.replace(/[^|w]/g, "").toLowerCase();

    const obj = {a: 1, b: 1. c:1};
    Object.keys(obj); returns ["a", "b", "c"];
    Object.keys(obj).length; returns 3;
*/


function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // Compare the length of two strings or check number of keys in charMap

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  } 

  // Iterate to compare the uses

  for (let char in aCharMap) {
    // a:3 !== a:2
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

// Helper Function

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^|w]/g, "").toLowerCase()) {
    // if charMap[char] exists add one, if not make new charMap[char] = 1;
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}



// Method 2

/*
  Notes:
    const numbers = [10,30,5,-90, 10000];
    // if its alphabet itll return alphabetical order
    numbers.sort(); returns [-90, 10, 10000, 30, 5]
*/

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
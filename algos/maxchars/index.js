// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
  Common String Questions:
    - What is the most common character in the string?
    - Does string A have the same characters as string B (is it an anagram)?
    - Does the given string have any repeated characters in it?

    "Hello There!" =>
    {H: 1, e: 3, l: 2, o: 1, "":1, t:1, h:1, r:1, !:1}
*/

/*
  Notes:
  const string = "Hello There!"
  const chars = {};

  for (let char of string) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
    return chars;
  }

  // shorter version
  for(let char of string ){
    // if adding one to chars[char] is a null, then add 1;
    chars[char] = chars[char] + 1 || 1;
  }
  return chars;
*/



function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    // if letter exist in the object, increment 1;
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  // iterating object - we need to use for "in" syntax
  for (let char in charMap){
    if (charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log(max && maxChar);
  return maxChar;
}

maxChar('Hello There!');

module.exports = maxChar;
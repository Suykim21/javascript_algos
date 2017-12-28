// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*
  Notes:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

    const word = "there"
    word[0].toUpperCase() => T
    word.slice(1) => here

    const sentence = "Hi there buddy!"
    // spliting by space
    sentence.split(' '); => ["Hi", "there", "buddy!"]

    - Make an empty array 'words'
    - Split the input string by spaces to get an array
    - For each word in the array 
      - Uppercase the first letter of the word
      - Join first letter with rest of the string
      - Push result into 'words' array
    - Join 'words' into a string and return it
*/


function capitalize(str) {
  const words = [];

  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}


// Method 2 - Manual

/*
  Notes:
    - Create 'result' which is the first character of the input string capitalized
    - For each character in the string
      - If the character to the left a space
        - Capitalize it and add it to 'result'
      - Else
        - Add it to 'result'
*/

function capitalize2(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i <str.length; i++) {
    if (str[i - 1] === ' ') {
      // result = result + str[i].toUpperCase();
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse


// Method 1 - Method Helper

/*
function reverse(str) {
  // turn 'str' into an array
  const arr = str.split('');
  // call 'reverse' method on the array
  arr.reverse();
  // join the array back into a string
  arr.join('');
  // return the result
  // return arr.join('');

  // alternate solution (shortcut)
  return str.split('').reverse().join('');
}
*/

// Method 2 - Manual

function reverse(str) {
  // Create an empty string called 'reversed'
  let reversed = '';
  // for each character in the provided string
  for (let character of str) {
    // take the character and add it to the start of 'reversed'
    reversed = character + reversed;
  }
  // Return the variable 'reversed'
  return reversed;
}


// Method 3 - Array Helper

function reverse(str) {
  /*
   reduce() - takes in the array and condense it into single value
   Takes in two arguments: arrow function and initial value
  */
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

/*
  Debugger Steps
    - Add a 'debugger' statement in your function
    - Call the function manually
    - At the terminal, run 'node inspect index.js'
    - To continue execution of the file, press 'c' then 'enter'
    - To launch a 'repl' session, type 'repl' then 'enter'
    - To exit the 'repl', press Control + C
*/

module.exports = reverse;
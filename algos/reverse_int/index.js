// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*
  Notes:
    - const myNumber = 200
    - myNumber.toString().split('').join('')

    - Math.sign - returns -1 if the value is negative and vice versa
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

    - parseInt(myNumber.toString()) - returns string into number
*/



function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}


// Method 2 - Manual

function reverseInt2(n) {
  const string = n.toString();
  let reversed = '';
  for (let number of string) {
    reversed = number + reversed;
  }
  return parseInt(reversed) * Math.sign(n);
}


reverseInt2(-859);

module.exports = reverseInt;
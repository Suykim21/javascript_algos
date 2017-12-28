// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/*
  Notes:
    - Create empty array to hold chunks called 'chunked'
    - For each element in the 'unchunked' array
    - Retrieve the last element in 'chunked'
    - If last element does not exist, or if its length is equal to chunk size
    - Push a new chunk into 'chunked' with the current element
    - Else add the element element into the chunk
*/

function chunk(array, size) {
  const chunked = [];
  for (let elem of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size){
      // chunked = []
      // third iteration = [[1,2]]
      chunked.push([elem]);
      // chunked = [[1]];
      // Creates new chunk because last.length === size [[1,2]]
      // [[1,2],[3]]
    } else {
      // second iteration 
      // chunked = [[1,2]]
      last.push(elem);
    }
  } 
  return chunked;
}

// Method 2:

/*
  Notes:
    - Create empty 'chunked' array
    - Create 'index' start at 0
    - While index is less than array.length
    - Push a slice of length 'size' from 'array' into 'chunked'
    - Add 'size' to 'index'
*/

function chunk2(arr, size) {
  const chunked = [];
  // use let to allow changes over time
  let index = 0;

  while (index < array.length){
    // slice(begin, end);
    // [1,2,3] => [[1,2], [3]]
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// chunk([1,2,3], 2);

module.exports = chunk;
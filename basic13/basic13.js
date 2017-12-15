// Print 1-255

function print1to255() {
  var num = 1;
  while (num <=255) {
    console.log(num);
    num += 1;
  }
}

// Print Ints and Sum 0-255

function printIntsAndSum0to255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++){
    sum += i;
    console.log("New number:" + i + "Sum:" + sum);
  }
}

// Print Max of Array

function printMaxOfArray (arr) {
  if (arr.length == 0){
    console.log("Empty array, no max value.");
    return;
  }

  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("Max value is:" + max);
}

// Print Odds 1-255

function printOdds1to255(){
  var num = 1;
  while (num <= 255) {
    console.log(num);
    num += 2;
  }
}

// Return Odds Array 1-255

function returnOddsArray1to255(){
  var oddArray = [];
  for(var i = 1; 1 <=255; i+=2){
    oddArray.push(i);
  }
  return oddArray;
}

// Print Average of Array

function printAverageOfArray(arr) {
  if (arr.length == 0) {
    console.log("Empty arr, no average val");
    return;
  }
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Average value is:" + sum/arr.length);
}

// Greater Than Y - count and print the number of aray values less than a given Y

function numGreaterThanY(arr, y){
  var numGreater = 0;
  for (var i = 0; i <arr.length; i++) {
    if(arr[i] > y) {
      numGreater++;
    }
    // %d - puts in number - ex: "numGreater values are greater than y"
    console.log("%d values are greater than %d", numGreater, y);
  }
}

// Print Max, Min, Average Array values

function printMaxMinAverageArrayVals(arr){
  if (arr.length == 0) {
    console.log("Null arr, no min/max/avg");
    return;
  }
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i]
  }
  console.log("Max:" + max + "Min:" + min + "Avg value:" + sum/arr.length);
}

// Square Array values

function squareArrVals(arr) {
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}

// Zero Our Array Negative values

function zeroOutArrayNegativeVals (arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] < 0){
      arr[i] = 0;
    }
  }
  return arr;
}

// Shift Array Values Left - drop the first and leave '0' at end.

function shiftArrValsLeft(arr) {
  for(var i = 1; i < arr.length; i++){
    arr[i-1] = arr[i];
  }
  arr[arr.length-1] = 0;
  return arr;
}

// Swap String for Array Negative values

function swapStringForArrayNegativeVals (arr) {
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      arr[i] = "Dojo";
    }
  }
  return arr;
}

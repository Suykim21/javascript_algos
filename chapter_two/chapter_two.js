// Sigma - implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex: sigma(3) = 6 (or 1+2+3);

function sigma(num) {
  var sum = 0
  for (var i = 0; i <= num; i++){
    sum += i
  }
  return sum;
}

// Factorial - Write a function factorial(num) - ex:  factorial(5) = 120 (or 1*2*3*4*5)

function factorial(num){
  var sum = 1;
  for (var i = 1; i<= num; i++){
    sum = sum * i;
  }
  return sum;
}

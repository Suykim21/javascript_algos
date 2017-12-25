function sieveOfEratosthenes(n){
  var primes = [];
  for (var i = 2; i <= n; i++) {
    // marking every value to be true
    primes[i] = true;
  }

  for (var i = 2; i <= Math.sqrt(n); i++){
    console.log('from i ',i);
    // marking all the multiples 2*2, 2*3 etc as false;
    for (var j = 2; j * i <= n; j++) {
      console.log('from j ', j);
      console.log('from i * j = ', j*i );
      primes[i * j] = false;
    }
  }

  var result = [];
  for (var i = 0; i < primes.length; i++){
    // if primes[i] is true, append to results array;
    if(primes[i]) result.push(i);
  }

  console.log(result);
  return result;
}

sieveOfEratosthenes(20);
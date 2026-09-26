// contoh menggunakan cara iteratif (looping) 

function factorialIterative(n) {
  if (n < 0) return undefined; // faktorial angka negatif tidak terdefinisi
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
    console.log(`i=${i}, result=${result}`);
  }
  return result;
}

console.log(factorialIterative(5)); // 120
// console.log(factorialIterative(0)); // 1

// contoh cara rekrusif

function factorialRekrusif(n){
    if(n < 0) return undefined;
    if(n === 0 || n === 1) return 1
    return n* factorialRekrusif(n - 1);
}

// console.log(factorialRekrusif(5))

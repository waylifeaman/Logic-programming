// Tulis fungsi fizzBuzz(n) yang nge-print angka dari 1 sampai n, dengan aturan:

// Kelipatan 3 → print "Fizz"
// Kelipatan 5 → print "Buzz"
// Kelipatan 3 dan 5 → print "FizzBuzz"
// Selain itu → print angkanya


for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if(i % 5 ===0){
    console.log("Buzz")
  }else{
    console.log(i);
  }
}

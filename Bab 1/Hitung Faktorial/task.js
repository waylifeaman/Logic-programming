// Tulis versi iteratif dan rekursif sendiri (jangan lihat kode di atas dulu)
// Coba tambahkan validasi: kalau input bukan integer (misal 3.5), return error/undefined
// Tantangan: buat versi rekursif yang tail-recursive (pakai parameter accumulator)


const faktorial = (n)=>{
    if( n < 0) return undefined
    if(n % 1 != 0) return ('harus angka tidak boleh decimal')
    let result = 1
    for(let i = 2; i <= n; i++){
        result *= i;
        console.log(`i=${i}, dan result=${result}`)
    }
    return result
}

// console.log(faktorial(5.5))

// pakai parameter accumulator
function faktorialAcc(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  return faktorialAcc(n - 1, n * accumulator); // ✅ langsung return hasil rekursi, tanpa operasi tambahan
}

// console.log(faktorialAcc(5)); // 120



// 3 soal lagi
function factorial(n) {
    if(n < 0) return ("error: negative number");
    if(n % 1 != 0) return('error: not an integer')
    let result = 1;
    for(let i = 2; i<= n; i++){
        result *= i
    }
    return result
}

// console.log(factorial(5));    // 120
// console.log(factorial(0));    // 1
// console.log(factorial(-3));   // harus return "Error: negative number" (bukan crash/infinite loop)
// console.log(factorial(3.5));  // harus return "Error: not an integer"


// soal 4
function trailingZeros(n, acc = 1) {
    if(n<=1) return acc;
    return trailingZeros(n - 1, n * acc)
}

console.log(trailingZeros(5));   // 1  → karena 5! = 120 (satu nol di akhir)
console.log(trailingZeros(10));  // 2  → karena 10! = 3628800 (dua nol di akhir)
console.log(trailingZeros(100)); // 24
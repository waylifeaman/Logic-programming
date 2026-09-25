// Cetak semua angka prima dari 1 sampai N (bisa pakai fungsi isPrime di atas, atau coba pelajari Sieve of Eratosthenes — algoritma yang lebih cepat untuk kasus ini)
// Cari angka prima terbesar di bawah N
// Hitung jumlah angka prima dalam sebuah array


//function global cari bilangan prima
function isPrime(n){
    if(n < 2) return false;
    for(let p = 2; p * p <= n; p++){
        if(n % p === 0 ) return false
    }
    return true
}
//cetak semua angka prima 1 - n  
const printPrima = (number)=>{
    for(let i = 2; i <= number; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}


//Cari angka prima terbesar 1 - n
const bigPrime = (number)=>{
    for(let i = number; i >= 2; i--){
        if(isPrime(i)) return i;
    }
    return null;

}

// console.log(bigPrime(10))

// Hitung jumlah angka prima dalam sebuah array
const countPrime = (arr) => {
  let jumlah = 0;

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      jumlah++;
    }
  }

  return jumlah;
};

const data = [4, 7, 10, 13, 15, 17, 20, 23];
// console.log(countPrime(data));
console.log(bigPrime(12))
// printPrima(20)

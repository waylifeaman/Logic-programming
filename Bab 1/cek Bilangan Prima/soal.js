// Level Dasar (Konsep & Logika)
// 1. Apa definisi bilangan prima? Apakah 1 termasuk prima? Apakah 2 termasuk prima? Jelaskan alasannya.
// 2. Buat function isPrime(n) yang mengembalikan true/false. Apa kompleksitas waktu (Big O) dari solusimu?
// 3. Kenapa dalam mengecek bilangan prima kita cukup memeriksa pembagi sampai √n, tidak perlu sampai n?
// 4. Apa yang terjadi jika input isPrime(n) adalah bilangan negatif atau desimal? Bagaimana seharusnya function menanganinya?

// apakah di soal ini kita harus mengoding atau cuma jawab saja?

// Answare
// 1. bilangan prima meruakan bilangan yang hanya memilikin tepat dua pembagi, yaitu 1  dan bilangan itu sendiri, 

// 2.
const isPrime = (n)=>{
    if(n  <  2) return false;
    for(let i  = 2; i < n; i++){
        if(n % i === 0) return false;        
    }
    return true
}
const cekPrima = (p)=>{
    for(let i = 2; i <= p; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}

cekPrima(11)

//3. karena dengan dengan mengecek nilai dari vactor N saja sudah cukup untuk mengetahui bilangan tersebut merupakan bilangan prima atau bukan, contoh 9 
    //factornya adalah 3 * 3 maka cukup cek dari nilai 3 saja, ga perlu cek sampai nilai n nya  9, karena jika nilai n terlalu besar contoh 30 maka looping 
    // akan lebih banyak karena harus mengecek semua nilai sampa 30

// 4. setelah saya coba 
// const cekPrima = (p)=>{
//     for(let i = 2; i <= p; i++){
//         if(isPrime(i)){
//             console.log(i)
//         }
//     }
// }

// cekPrima(-20)
// hasilnya tidak muncul apapa
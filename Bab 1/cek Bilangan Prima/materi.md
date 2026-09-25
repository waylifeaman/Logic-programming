Cek bilangan prima ada 3 cara

1.  cara sederhana (Trial Devision)
    const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
    }
    return true;
    };

    INI merupakan cara paling sederhana, ini berjalan dengan mengecek semua angka 1 - n

2.  Trial Division + skip angka genap (sedikit lebih cepat)
    const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false; // selain 2, genap pasti bukan prima

        for (let i = 3; i * i <= n; i += 2) { // loncat 2 angka (skip genap)
            if (n % i === 0) return false;
        }
        return true;
        };

    perbedaan dari cara 1 adalah, cara ini mengecek bilangan prima dengan mengskip bilangan genap

3.  Sieve of Eratosthenes (untuk banyak angka sekaligus)
    Ini bukan untuk cek satu angka, tapi kalau kamu perlu tahu prima dari 1 sampai N sekaligus, jauh lebih efisien (sudah kita bahas sebelumnya).

    const sieveOfEratosthenes = (n) => {
    const isPrimeArr = new Array(n + 1).fill(true);
    isPrimeArr[0] = isPrimeArr[1] = false;
    for (let i = 2; i _ i <= n; i++) {
    if (isPrimeArr[i]) {
    for (let j = i _ i; j <= n; j += i) {
    isPrimeArr[j] = false;
    }
    }
    }
    return isPrimeArr;
    };

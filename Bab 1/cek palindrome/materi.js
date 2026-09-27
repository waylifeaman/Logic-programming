//palindrome merupakan string atau angka yang jika  di balik atau dibaca dari depan/belakang hasilnya sama 

// "racecar" → dibaca dari depan: r-a-c-e-c-a-r
//             dibaca dari belakang: r-a-c-e-c-a-r
//             SAMA! → palindrome ✅

// "level"   → l-e-v-e-l (sama dibaca depan-belakang) → palindrome ✅

// "hello"   → h-e-l-l-o dibaca depan
//             o-l-l-e-h dibaca belakang
//             BEDA → bukan palindrome ❌
// 121   → palindrome (baca depan 1-2-1, baca belakang 1-2-1)
// 12321 → palindrome
// 123   → bukan (baca belakang jadi 321)

// cara 1
function isPalindromeSimple(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// console.log(isPalindromeSimple("racecar")); // true
// console.log(isPalindromeSimple("hello"));   // false

// cara 2
function isPalindrome(str){
    let left = 0;
    let right = str.length - 1

    while(left < right){
        if(str[left] != str[right]){
            return false
        }
        left++;
        right--;
    }
    return true
}

// console.log(isPalindrome(121))
// console.log(isPalindrome("nanan"))

// caara 3 jika ada spasi atau huruf kapital maka abaikan
function isPalidromeUpperCase(str){
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0
    let right = clean.length - 1

    while(left < right){
        if(clean[left] != clean[right]){
            return false
        }

        left++
        right--
    }
    return true
}

// console.log(isPalidromeUpperCase("Kapak"))
// console.log(isPalidromeUpperCase("Kap Ak"))


// 4. mengecek number is palindrome

function isPalindromeRange(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

function validPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      // ketemu yang beda → coba skip salah satu, cek dua kemungkinan
      return isPalindromeRange(str, left + 1, right) || 
             isPalindromeRange(str, left, right - 1);
    }
    left++;
    right--;
  }

  return true; // sudah palindrome dari awal, gak perlu hapus apa-apa
}

console.log(validPalindrome("abca"));   // true (hapus 'b' atau 'c')
console.log(validPalindrome("racecar")); // true (sudah palindrome)
console.log(validPalindrome("abc"));    // false (hapus apapun tetap gak jadi palindrome)
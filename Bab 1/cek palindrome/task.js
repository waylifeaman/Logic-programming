//  Soal 1 (Easy): Palindrome dengan Angka Romawi... eh, salah. Palindrome Kata dalam Kalimat

// Buat fungsi countPalindromeWords(sentence) yang menghitung berapa banyak kata dalam sebuah kalimat yang merupakan palindrome.

// javascript
function isPalindrome(word){
  let left = 0;
  let right = word.length - 1
    while(left < right){
        if(word[left] != word[right]){
            return false
        }
        left++
        right--
    }    
    return  true
}

function countPalindromeWords(sentence) {

    const words = sentence.split(' ');
    let count = 0;

    for (const word of words) {
        if (isPalindrome(word)) {
        count++;
        }
    }

    return count;

}

console.log(countPalindromeWords("ibu ani baca kata malam sambil melihat langit"));
// output: 3  → karena "ibu", "kata", "malam" adalah palindrome (bukan "ani", "baca", dll)

// Petunjuk: pecah kalimat jadi array kata (split(' ')), lalu cek satu-satu pakai fungsi isPalindrome yang sudah kita buat sebelumnya.
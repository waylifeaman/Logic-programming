// Modifikasi fungsi di atas jadi fizzBuzz(n) yang return array of string, bukan langsung print ke console. Jadi hasilnya bisa dipakai lagi buat keperluan lain (misal ditest otomatis).

// Contoh: fizzBuzz(5) harus return:
// ["1", "2", "Fizz", "4", "Buzz"]

function FizzBuzzer(n){
    let data = [] 
    for(let i = 1; i <= n; i++){
            if(i % 15 === 0 ){
                data.push ("FizzBuzzer")
            }else if(i % 3 === 0){
                data.push("Fizz")
            }else if(i % 5 === 0){
                data.push("Buzz")
            }else{
                data.push(i)
            }
    }       
    return data
}

console.log(FizzBuzzer(15))


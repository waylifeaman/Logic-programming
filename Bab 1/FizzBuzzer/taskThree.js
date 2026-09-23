// Sekarang bikin fungsi yang lebih general: customFizzBuzz(n, rules), 
// di mana rules adalah array of object berisi divisor dan label-nya. Jadi gak
// hardcode 3 dan 5 lagi.

// Aturannya: kalau angka habis dibagi oleh beberapa divisor sekaligus,
// label-nya digabung sesuai urutan di rules 
// (misal kelipatan 3 dan 5 → "FizzBuzz", kelipatan 3 dan 7 → "FizzBazz").

// function customFizzBuzz(n, rules){
//     let data = [];
    
//     for(let i = 1; i <= n; i++){    
//         let output = ""; 
//         for(let rule of rules){
//             if(i % rule.divisor === 0 ){
//                 output += rule.label;
//             }
//         }
//         data.push(output === "" ? i.toString() : output)
//     }
//     return data
// }
// console.log(customFizzBuzz(35, [
//   { divisor: 3, label: "Fizz" },
//   { divisor: 5, label: "Buzz" },
//   { divisor: 7, label: "Bazz" }
// ]))

// kode i di atas merupakan salah satu mehode untuk menampilkan data labelnya, 
// masih ada beberapa method yang bisa di  pake seperti
// map + filter + join, dan ada juga pakai reduce

//contoh map + filter + label
// const customFizzBuzz=(n, rules) =>{
//     let data  = [];
//     for(let i = 1; i <= n; i++){
//         let mat = rules.filter(rule=> i % rule.divisor === 0 );
//         let output = mat.map(rule=> rule.label).join('')
//         data.push(output || i)  
//     }
//     return data
// }

// console.log(customFizzBuzz(21, [
//   { divisor: 3, label: "Fizz" },
//   { divisor: 5, label: "Buzz" },
//   { divisor: 7, label: "Bazz" }
// ]))

//Cara 3 pake reduce()
const customFizzBuzz= (n, rules)=>{
    let data = []
    for(let i = 1; i <= n; i++){     
        const output = rules.reduce((acc, rule)=>
            i % rule.divisor === 0 ? acc + rule.label : acc, ""
        )
        data.push(output || i)
    }
    return data
}

console.log(customFizzBuzz(21, [
  { divisor: 3, label: "Fizz" },
  { divisor: 5, label: "Buzz" },
  { divisor: 7, label: "Bazz" }
]))
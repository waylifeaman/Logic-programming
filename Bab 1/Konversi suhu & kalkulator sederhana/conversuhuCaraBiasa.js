// Rumus Dasar
// Celsius ke Fahrenheit:  F = (C × 9/5) + 32
// Fahrenheit ke Celsius:  C = (F - 32) × 5/9
// Celsius ke Kelvin:      K = C + 273.15
// Kelvin ke Celsius:      C = K - 273.15

function celciusKeFahreheit(Celcius){
    return (Celcius * 9/5) + 32
}

console.log(celciusKeFahreheit(34))

function fahreheitKeCelcius(farenhit){
    return (farenhit - 32) * 5/9
}

console.log(fahreheitKeCelcius(89))

function celciusKeKelvin(celcius){
    return (celcius + 273.15)
}

console.log(celciusKeKelvin(100))

function kelvinKeCelcius(kelvin){
    return (kelvin - 273.15)
}
console.log(kelvinKeCelcius(98))
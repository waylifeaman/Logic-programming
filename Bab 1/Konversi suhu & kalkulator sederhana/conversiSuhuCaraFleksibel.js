function convertTemperature(value, fromUnit, toUnit){
    let celcius;

    // konversi ke celcius dulu
    if(fromUnit === 'C'){
        celcius = value;
    }else if(fromUnit === 'F'){
        celcius = (value - 32) *5/9
    }else if(fromUnit === 'K'){
        celcius = value - 273.15;
    }else{
        return 'Error: unit tidak di kenali'
    }

    // baru  bida di cnvert ke berbagai satuan, seperti K, F
    if(toUnit === 'C'){
        return celcius
    }else if(toUnit === 'F'){
        return (celcius * 9/5) + 32
    }else if(toUnit === 'K'){
        return (celcius + 273.15)
    }else {
        return 'Error: unit tidak di kenali'
    }
}

console.log(convertTemperature(100, 'C', 'F'));
console.log(convertTemperature(32, 'F', 'C'));
console.log(convertTemperature(0, 'C', 'K'));
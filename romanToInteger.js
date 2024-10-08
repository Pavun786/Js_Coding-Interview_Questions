

 function romanToInteger(roman){

    const romanmap = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    let total = 0;
    let prevalue = 0;

    for(let i=roman.length-1;i>=0;i--){

        const currentValue = romanmap[roman[i]]

        if(currentValue < prevalue){
            total -= currentValue
        }else{
            total += currentValue;
        }

        prevalue = currentValue;
    }

    return total;

 }

 const output = romanToInteger("MCMXCVI")

 console.log(output)
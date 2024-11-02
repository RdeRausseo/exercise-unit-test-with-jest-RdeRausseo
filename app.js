const sum = (a,b) =>{
    return a + b; 
}

console.log(sum(7,3))


function fromDollarToYen (dolares){
    const valueYentoDollar = 152.95
    return valueYentoDollar * dolares; 
}

function fromEuroToDollar(euros){
    const valueEurotoDollar = 1.07;
    return euros * valueEurotoDollar;
}

function fromYenToPound(yen){
    const valuePoundtoYen = 197.84
    return valuePoundtoYen * yen; 
}

module.exports = {sum, fromEuroToDollar,fromDollarToYen, fromYenToPound}
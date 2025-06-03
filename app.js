/*
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

module.exports = {sum, fromEuroToDollar,fromDollarToYen, fromYenToPound} */



// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))



const fromDollarToYen = (dolares) => {
    const DolarValueToEuro = 1.07; 
    const  JPY = 156.5; 
    const DOLLARTOEURO = dolares / DolarValueToEuro; 
    
    return DOLLARTOEURO * JPY; 
}

const fromEuroToDollar = (euros) => {
    const DolarValueToEuro = 1.07; 
    return DolarValueToEuro * euros
}

const fromYenToPound = (yenes) => {
    const YenToEuroValue = 156.5; 
    const fromEuroToYen = yenes / YenToEuroValue; 
    const GBP = 0.87; 
    return fromEuroToYen * GBP
}



// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };

//console.log("Hello World"); 
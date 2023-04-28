// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)




let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromEuroToDollar = (euroValue) =>{
    let dollarValue = euroValue * 1.2
    return dollarValue
}

const fromDollarToYen = (dollarValue) => {
    let yenValue = (dollarValue / 1.2) * 127.2
    return yenValue
}

const fromYenToPound = (yenValue) => {
    let poundValue = ((yenValue/127.2)*0.8)
    return poundValue;

}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
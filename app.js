// Contenido de app.js 

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes japoneses
    let valueInYen = valueInDollar * (156.5 / 1.07); // Usamos la tasa de conversión de euro a yen y de euro a dólar
    return valueInYen;
}

// Declaramos una función "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras esterlinas
    let valueInPound = valueInYen * (0.87 / 156.5); // Usamos la tasa de conversión de euro a yen y de euro a libra
    return valueInPound;
}

const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(3, 4));

// Exportamos todas las funciones
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

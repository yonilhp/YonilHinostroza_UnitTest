// Contenido de app.js 

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const sum =(num1,num2)=>{
    return num1+num2;
}

console.log(sum(3,4));

module.exports={sum,fromEuroToDollar};
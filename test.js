const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

// Prueba para la función sum
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Prueba para fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

// Prueba para fromDollarToYen
test("One dollar should be 146.26 yenes", function() {
    const yenes = fromDollarToYen(1);
    const expected = 1 * (156.5 / 1.07); // Usamos la tasa de conversión
    expect(yenes).toBeCloseTo(expected); // Usamos toBeCloseTo para evitar problemas de precisión con decimales
});

// Prueba para fromYenToPound
test("One yen should be 0.00556 pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = 1 * (0.87 / 156.5);
    expect(pounds).toBeCloseTo(expected);
});

// importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("un euro va a ser 1.2 dólares", () =>{
   
expect(fromEuroToDollar(1)).toBe(1.2)
})

test("un dollar va a ser 106.583", () => {
    expect(fromDollarToYen(1)).toBe(106)
})

test("un yen serán 0.006", () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.006, 3)
})
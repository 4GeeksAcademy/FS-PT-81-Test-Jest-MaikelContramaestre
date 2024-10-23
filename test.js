const {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound} =require('./app'); 

test('la suma de 5 + 5 es igual 10', () =>{
    const result=sum(5,5);
    expect(result).toBe(10);    
});

test('el cambio de Euro a Dolar es  ', ()=> {
    const expected = 6.8*1.07;
    expect(fromEuroToDollar(6.8)).toBe(expected);
});

test('el cambio de Dolar a Yen es  ', ()=> {
    const expected = 7.5*152.72;
    expect(fromDollarToYen(7.5)).toBe(expected);
});

test('el cambio de Yen a Pound es ', ()=> {
    const expected = 100.5*0.0050;
    expect(fromYenToPound(100.5)).toBe(expected);
});
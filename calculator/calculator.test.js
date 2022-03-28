const calculator = require('./calculator');

test('Tests addition', () => {
  expect(calculator.add([1, 2])).toBe(3);
});

test('Tests Subtraction', () =>{
    expect(calculator.subtract([5, 4])).toBe(1);
});

test('Tests Multiplication', () =>{
    expect(calculator.multiply([10, 4])).toBe(40);
});
test('Tests Division', () =>{
    expect(calculator.divide([30, 3])).toBe(10);
});



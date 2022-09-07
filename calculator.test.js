const calculator = require('./calculator');

test('calculator adds two numbers correctly', () => {
    const result = calculator.add(1,2);
    expect(result).toBe(3);
    expect(typeof(result)).toBe('number');
});
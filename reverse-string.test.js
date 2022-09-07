const reverseString = require('./reverse-string');

test('reverseString reverses a string', () => {
    expect(reverseString('abc')).toBe('cba');
});
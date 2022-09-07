const caesarCipher = require('./caesar-cypher');

// a. Don’t forget to test wrapping from z to a.
test('caesar cipher wraps lower case correctly', () => {
    const result = caesarCipher('abcdefghijklmnopqrstuvwxyz', 13);
    expect(result).toBe('nopqrstuvwxyzabcdefghijklm');
})

test('caesar cipher wraps upper case correctly', () => {
    const result = caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    expect(result).toBe('NOPQRSTUVWXYZABCDEFGHIJKLM');
})

// b. Don’t forget to test keeping the same case.
test('caesar cipher keeps the same case', () => {
    const result = caesarCipher('The Quick Brown Fox Jumped Over The Lazy Dog');
    expect(result).toBe('Gur Dhvpx Oebja Sbk Whzcrq Bire Gur Ynml Qbt');
})

// c. Don’t forget to test punctuation!
test('caesar cipher ignores punctuation', () => {
    const result = caesarCipher('!@#$%^&*()<>.,{}[]:;"\'/\\|~`🔥');
    expect(result).toBe('!@#$%^&*()<>.,{}[]:;"\'/\\|~`🔥');
})
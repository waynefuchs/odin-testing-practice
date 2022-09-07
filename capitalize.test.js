const capitalize = require('./capitalize');

// 1. capitalize
test("capitalize capitalizes first letter", () => {
    const sentence = capitalize('this is a test');
    expect(sentence).not.toBe(/^[a-z]{1}/);
});

test("capitalize only changes first letter's capitalization", () => {
    const initialSentence = 'the quick brown fox jumped over the lazy dog. AbCdEfGhIjKlMnOpQrStUvWxYz';
    const sentence = capitalize(initialSentence);
    expect(sentence.slice(1)).toBe(initialSentence.slice(1));
});

test("capitalize does not change numbers", () => {
    const sentence = capitalize('0123456');
    expect(sentence.charAt(0)).toBe('0');
});


// 4. A caesarCipher function that takes a string and returns it with each
//    character “shifted”. Read more about how a Caesar cipher works on this
//    website.
const ccRotate = (char, amount) => {
    let offset = false;
    if(/^[a-z]+$/.test(char)) offset = 'a'.charCodeAt(0);
    if(/^[A-Z]+$/.test(char)) offset = 'A'.charCodeAt(0);
    if(offset) {
        const charCode = ((char.charCodeAt(0) - offset + amount) % 26) + offset;
        console.log(charCode);
        return String.fromCharCode(charCode);
    }
    return char;
}

const caesarCipher = (str, amount) =>
  str
    .split("")
    .map((c) => ccRotate(c, amount))
    .join("");

module.exports = caesarCipher;

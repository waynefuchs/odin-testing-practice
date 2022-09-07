// 4. A caesarCipher function that takes a string and returns it with each
//    character “shifted”. Read more about how a Caesar cipher works on this
//    website.
const caesarCypherRotateCharacter = (char, shiftBy=13) => {
  let offset = false;
  if (/^[a-z]+$/.test(char)) offset = "a".charCodeAt(0);
  else if (/^[A-Z]+$/.test(char)) offset = "A".charCodeAt(0);
  if (offset) {
    const charCode = ((char.charCodeAt(0) - offset + shiftBy) % 26) + offset;
    return String.fromCharCode(charCode);
  }
  // Directly pass all non [a-z][A-Z]
  return char;
};

const caesarCipher = (str, amount) =>
  str
    .split("")
    .map((c) => caesarCypherRotateCharacter(c, amount))
    .join("");

module.exports = caesarCipher;

// `sum` From Jest Tutorial
function sum(a, b) {
  return a + b;
}

// `compileAndroidCode` from Jest Tutorial
function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

module.exports = {
  sum,
  compileAndroidCode,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};

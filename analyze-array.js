// 5. An analyzeArray function that takes an array of numbers and returns
//    an object with the following properties: average, min, max, and length.
function analyzeArray(array) {
    return {
        average: array.reduce((total, n) => (total += n), 0) / (array.length - 1),
        min: array.reduce(
          (min, n) => (min = n < min ? n : min),
          Number.POSITIVE_INFINITY
        ),
        max: array.reduce(
          (max, n) => (max = n > max ? n : max),
          Number.NEGATIVE_INFINITY
        ),
        length: array.length,
      };
}

module.exports = analyzeArray;

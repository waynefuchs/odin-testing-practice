const analyzeArray = require("./analyze-array");

// I can name my test whatever I want. Nice.
test("analyze array returns expected result and test if i can name this whatever I want", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.average).toBeGreaterThan(4);
  expect(object.average).toBeLessThan(5);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(6);
});

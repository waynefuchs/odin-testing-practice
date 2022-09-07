const calculator = require("./calculator");

test("calculator adds two numbers correctly", () => {
  const result = calculator.add(1, 2);
  expect(result).toBe(3);
  expect(typeof result).toBe("number");
});

test("calculator subtracts two numbers correctly", () => {
  const result = calculator.subtract(1, 2);
  expect(result).toBe(-1);
  expect(typeof result).toBe("number");
});

test("calculator divides two numbers into an integer correctly", () => {
  const result = calculator.divide(10, 2);
  expect(result).toBe(5);
  expect(typeof result).toBe("number");
});

test("calculator divides two numbers into a floating point number correctly", () => {
  const result = calculator.divide(1, 2);
  expect(result).toBe(0.5);
  expect(typeof result).toBe("number");
});

test("calculator multiplies a negative and positive number correctly", () => {
  const result = calculator.multiply(-1, 13);
  expect(result).toBe(-13);
  expect(typeof result).toBe("number");
});

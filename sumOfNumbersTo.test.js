// sumOfNumbersTo.test.js

const sumOfNumbersTo = require("./sumOfNumbersTo");

describe("sumOfNumbersTo", () => {
  test("should return the correct sum of numbers up to destination", () => {
    expect(sumOfNumbersTo(5)).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
    expect(sumOfNumbersTo(10)).toBe(55); // 1 + 2 + 3 + ... + 10 = 55
    expect(sumOfNumbersTo(100)).toBe(5050); // 1 + 2 + 3 + ... + 100 = 5050
  });

  test("should return 0 when destination is 0", () => {
    expect(sumOfNumbersTo(0)).toBe(0);
  });

  test("should return 0 when destination is a negative number", () => {
    expect(sumOfNumbersTo(-5)).toBe(0);
  });
});

// countEvenNumbersWithin.test.js

const countEvenNumbersWithin = require("./countEvenNumbersWithin");

describe("countEvenNumbersWithin", () => {
  test("should return the sum of even numbers within the destination", () => {
    expect(countEvenNumbersWithin(10)).toEqual({
      count: 5,
      sum: 30,
      arrayOfEvenNumbers: [2, 4, 6, 8, 10],
    });

    expect(countEvenNumbersWithin(20)).toEqual({
      count: 10,
      sum: 110,
      arrayOfEvenNumbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    });

    expect(countEvenNumbersWithin(0)).toEqual({
      count: 0,
      sum: 0,
      arrayOfEvenNumbers: [],
    });
  });

  test("should return 0 count and sum when destination is a negative number", () => {
    expect(countEvenNumbersWithin(-5)).toEqual({
      count: 0,
      sum: 0,
      arrayOfEvenNumbers: [],
    });
  });
});

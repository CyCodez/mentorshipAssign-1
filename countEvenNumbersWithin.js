/**
 * Challenge - 2
 *
 * Calculate count, sum and put in an array the even numbers from 1 to a destination. Object keys are count, sum, arrayOfEvenNumbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
 * @param {Number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
function countEvenNumbersWithin(destination) {
  // Write your code here
  // get the number from 1 to destination
  let sum = 0;
  let count = 0;
  let arrayOfEvenNumbers = [];
  for (let i = 1; i <= destination; i++) {
    if (i % 2 === 0) {
      arrayOfEvenNumbers.push(i);
      sum = arrayOfEvenNumbers.reduce((a, b) => a + b, 0);
      count = arrayOfEvenNumbers.length;
    }
  }

  return {
    // property value shorthand
    // when the property name and the value name are the same
    // you can just write the property name in your object
    count,
    sum,
    arrayOfEvenNumbers,
  };
}

console.log(countEvenNumbersWithin(10)); // { count: 5, sum: 30, arrayOfEventNumbers: [2, 4, 6, 8, 10] }
module.exports = countEvenNumbersWithin;

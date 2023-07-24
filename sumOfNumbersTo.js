/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination   is inclusive when calculating the sum.
 *
 * If you did Challenge - 1, remove the comment in the line just after this function
 *
 * @param {Number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
function sumOfNumbersTo(destination) {
  // Write your code here
  // destination = 10
  // 1+2+3+4+5+6+7+8+9+10=55
  // step involved
  const array = [];
  for (i = 1; i <= destination; i++) {
    array.push(i);
  }
  return array.reduce((a, b) => a + b, 0);
}

console.log(sumOfNumbersTo(10)); // 1+2+3+4+5=15
module.exports = sumOfNumbersTo;

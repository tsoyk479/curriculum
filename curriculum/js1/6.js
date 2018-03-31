/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, b=a, result=0) => {
  if (b === 0) return result;
  if ((b !== 1) && (a !== b) && (a % b === 0)) result += b;
  b -= 1;
  return solution(a, b, result);
};

module.exports = {
  solution,
};

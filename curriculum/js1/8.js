/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  if (b === 0) return a;
  return solution(b, a % b);
};

module.exports = {
  solution,
};

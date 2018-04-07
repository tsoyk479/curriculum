/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, b=1, cnt=0) => {
  // primes are greater than 1 whole numbers
  if (a === 1) return false;
  // increment divisible count
  if (a != b && a % b === 0) ++cnt;
  // a prime is a number only be divisible by itself
  if (b === a) return cnt === 1;

  return solution(a, b+1, cnt);
};

module.exports = {
  solution,
};

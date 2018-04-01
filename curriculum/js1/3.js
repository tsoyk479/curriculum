/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b="hello", result="") => {
    if (a === 0) return result;
    return solution(--a, b, result += b);
};

module.exports = {
  solution,
};

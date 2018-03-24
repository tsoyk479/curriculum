/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b="hello", result="") => {
    if (a === 0) { return result }
    result += b;
    a -= 1;
    return solution(a, b, result);
};

console.log(solution(3, 'hello'));

module.exports = {
  solution,
};

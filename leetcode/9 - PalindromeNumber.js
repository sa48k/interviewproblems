/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false
    function getDigit(number, n) {
        return Math.floor((number / Math.pow(10, n)) % 10);
    }
    // check if first half forwards is the same as the second half backwards
    let l = x.toString().length
    for (let i = 0; i < l; i++) {
        // console.log(getDigit(x, i), getDigit(x, l - i - 1)) // debug
        if (getDigit(x, i) !== getDigit(x, l-i-1)) return false
    }
    return true
};

console.log(isPalindrome(-1))

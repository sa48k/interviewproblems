/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let arrlen = digits.length - 1
    for (let i = arrlen; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1
            return digits
        } else {
            digits[i] = 0
        }
    }
    // if we get this far, every digit has been a nine
    let newarr = digits.fill(0)
    return [1, ...newarr]
};

console.log(plusOne([9,9,9]))
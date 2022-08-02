/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let result = [], tmpstr = ''
    for (let i = 1; i < n+1; i++) {
        if (i % 3 === 0) tmpstr += 'Fizz'
        if (i % 5 === 0) tmpstr += 'Buzz'
        result.push(tmpstr ? tmpstr : i)
        tmpstr = ''
    }
    return result
}

console.log(fizzBuzz(15))
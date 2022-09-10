/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let result = []
    for (let i = 1; i < n+1; i++) {
        let tmpstr = ''
        if (i % 3 === 0) tmpstr += 'Fizz'
        if (i % 5 === 0) tmpstr += 'Buzz'
        result.push(tmpstr ? tmpstr : i)
    }
    return result
}

console.log(fizzBuzz(45))
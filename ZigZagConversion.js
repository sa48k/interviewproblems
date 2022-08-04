/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s
    let rows = new Array(numRows).fill('')
    let currentrow = 0
    let down = true

    for (let i = 0; i < s.length; i++) {
        rows[currentrow] += (s[i])
        down ? currentrow++ : currentrow--
        if (currentrow === numRows-1 || currentrow === 0) down = !down
    }

    return rows.join('')
};

console.log(convert('abcdefgh', 3))

/**
 * @param {number} n
 * @return {number}
 */
const sumArray = (arr) => arr.reduce((a, b) => a + b)

var climbStairs = function (n) {
    let results = []
    let perms = [[1], [2]] // init root nodes
    while (perms.length > 0) {
        let nextlevel = []
        for (let i = 0; i < perms.length; i++) {
            if (sumArray(perms[i]) === n) {
                results.push(perms[i])
            }
            if (sumArray(perms[i]) < n) {
                nextlevel.push([...perms[i], 1], [...perms[i], 2])
            }
        }
        perms = nextlevel
    }
    // console.log(JSON.stringify(results))
    return results.length
};

let fibonacci = (num) => {
    return num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(35))
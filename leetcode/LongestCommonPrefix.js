/**
 * @param {string[]} strs
 * @return {string}
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    let prefix = ''
    for (let i = 0; i < strs[0].length; i++) {
        let nextprefix = prefix + strs[0].charAt(i)
        if (strs.every(e => e.indexOf(nextprefix) === 0)) {
            prefix = nextprefix
        } else { 
            break
        }
    }
    return prefix
};

console.log(longestCommonPrefix(['a']))
console.log('done')

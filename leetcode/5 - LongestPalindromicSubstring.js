/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = ''
    let longest = ''
    
    const expandFromCentre = (s, left, right) => {
        let l = left
        let r = right
        while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            l--
            r++
        }
        return s.slice(l + 1, r)
    }
        
    for (let i = 0; i < s.length; i++) {
        console.log('\ni = ' + i)
        const palindromeodd = expandFromCentre(s, i, i)        // for when there is one central char
        const palindromeeven = expandFromCentre(s, i, i + 1)   // for when there are two central chars
        longest = palindromeodd.length > palindromeeven.length ? palindromeodd : palindromeeven // take the longest of the two
        if (longest.length > result.length) result = longest    
    }

    return result
};

console.log('\nLongest: ' + longestPalindrome('aaaaaaabbb'))
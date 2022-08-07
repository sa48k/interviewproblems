// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

//     Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let word = ''
    let result = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            word = s[i] + word
        } else {
            result = result + word + ' '
            word = ''
        }
    }
    result = result + word + ' '
    return result
};

console.log(reverseWords("Let's take LeetCode contest"))
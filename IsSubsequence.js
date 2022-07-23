/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var s = 'abc';
var t = 'ahbnc';

var isSubsequence = function(s, t) {
    let sub = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[sub] == t[i]) {
            sub++;
        }
    }
    return sub === s.length
};

console.log(isSubsequence(s, t));
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const s = 'badc';
const t = 'bada';

var isIsomorphic = function (s, t) {
    const m = new Map();

    // iterate through pair of letters
    // check that the key: value pair doesn't exist already
    // if it doesn't, add it to the map
    for (let i = 0; i < s.length; i++) {   
        if (m.has(s[i]) && m.get(s[i]) != t[i]) { return false; }
        m.set(s[i], t[i]);
    }
    // there shouldn't be any duplicates in the values. if there are, fail.
    return new Set([...m.values()]).size == m.size; 
};

console.log(isIsomorphic(s, t));
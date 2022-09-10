// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

const { default: build } = require("next/dist/build");

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  
    // helper function to compare freq tables
    const compareMaps = (obj1, obj2) => {
        console.log('comparing ' + JSON.stringify(obj1) + ' and ' + JSON.stringify(obj2));
        const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) return false;
        for (const key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false
            }
        }
        return true;
    }
 
    // build frequency map
    const buildFrequencyMap = (s) => {
        let freqmap = new Map
        for (let i = 0; i < s.length; i++) {
            freqmap[s[i]] = (freqmap[s[i]] + 1) || 1
        }
        return freqmap
    }

    // this is a slow way to do it
    // should have used two pointers instead
    let s1freqs = buildFrequencyMap(s1)
    for (let start = 0; start < s2.length-s1.length+1; start++) {
        let s2freqs = buildFrequencyMap(s2.slice(start, start+s1.length))
        if (compareMaps(s1freqs, s2freqs) === true) return true
    }
    return false
};

console.log(checkInclusion('ai', 'adoia'))
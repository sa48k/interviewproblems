var lengthOfLongestSubstring = function (s) {
    let longest = ''
    let substr = ''
    let idx = 0

    const hasDupes = (st) => {
        for (let j = 0; j < st.length; j++) {
            if (st.indexOf(st[j]) !== st.lastIndexOf(st[j])) return true
        }
        return false
    }

    for (let i = idx + 1; i < s.length+1; i++) {
        substr = s.slice(idx, i)
        console.log(idx, i, substr)
        if (hasDupes(substr)) {
            idx++
        } else {
            if (substr.length > longest.length) longest = substr
        }
    }
        return "Longest substring is " + longest
    
};

console.log(lengthOfLongestSubstring(['flower', 'flower']))
const longestPalindrome = (s) => {
    // build a Map that shows how many of each letter we have in the string
        
    map = new Map()
    gotOdds = false
    result = 0

    for (let i = 0; i < s.length; i++) {        // iterate through the string
        map.set(s[i], map.get(s[i]) + 1 || 1)   // if we've seen the letter before, increment its value in the map
    }                                           // if we haven't seen it before, add it to the map and set value to 1

    // find the highest odd number (if there is one)
    
    // actually let's just use the even numbers first
    // var output = ''
    // map.forEach((value, key) => {
    //     if (value % 2 == 0) {
    //         output += key.repeat(value/2) // abandon ship! having re-read the description
    //     }                                 // we only need to return the LENGTH of the longest palindrome
    // });                                   // leaving this here as a reminder to actually read the problem next time

    map.forEach((value, key) => {
        if (value % 2 === 0) {
            result += value        // yes, we can use all these letters because there are an even number
        } else {
            gotOdds = true
            result += value - 1    // we can only use two of these three (or zero from 1, four from five, etc.) of these
        }
    });
    
    return gotOdds ? result + 1 : result
};

console.log(longestPalindrome('abccccdd'))
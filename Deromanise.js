/**
 * @param {string} s
 * @return {number}
 */

var s = 'MCMXCIV'; 
let count = 0;

function romanToInt(s) {
    // deal with these six special cases where subtraction is used
    const specials = [['IV', 4], ['IX', 9], ['XL', 40], ['XC', 90], ['CD', 400], ['CM', 900]];
    for (let i=0; i<specials.length; i++) {
        if (~s.indexOf(specials[i][0])) {       // if any special numerals are found in the string,
            count += specials[i][1]             // add their value to count,
            s = s.replace(specials[i][0], '')   // then remove them 
        }
    }
    
    // deal with normal numerals
    for (let i=0; i<s.length; i++) {
            switch (s[i]) {  
                case 'M': { count += 1000; break;}
                case 'D': { count += 500; break;}
                case 'C': { count += 100; break;}
                case 'L': { count += 50; break}
                case 'X': { count += 10; break;}
                case 'V': { count += 5; break;}
                case 'I': { count += 1; break;}
            } 
        }
    return count;   
};

console.log(romanToInt(s));

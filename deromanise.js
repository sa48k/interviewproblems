/**
 * @param {string} s
 * @return {number}
 */

var s = 'MCXIV';
let count = 0;

function romanToInt(s) {
    function popnumber(rom, value) {
        if (~s.indexOf(rom)) {
            count += value
            s = s.replace(rom, '')
        }
    }

    popnumber('IV', 4); popnumber('IX', 9); popnumber('XL', 40); popnumber('LC', 90); popnumber('CD', 400); popnumber('CM', 900);
    for (let i=0; i<s.length; i++) {
            switch (s[i]) {  
                case 'M': { count += 1000; break;};
                case 'D': { count += 500; break;};
                case 'C': { count += 100; break;};
                case 'L': { count += 50; break};
                case 'X': { count += 10; break;};
                case 'V': { count += 5; break;};
                case 'I': { count += 1; break;};
            } 
        }
    return count;   
};

console.log(romanToInt(s));

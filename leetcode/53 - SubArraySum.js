// Subarray with given sum.

// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.
// In case of multiple subarrays, return the subarray which comes first on moving from left to right.

// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements from 2nd position to 4th position is 12.

let a = [1,2,3,7,5,4,4];
let s = 13;
let n = a.length;

for (let i=0; i<n; i++) { // start index
    for (let j=1; j<n+1-i; j++) { // end index
        let sum = a.slice(i, i+j).reduce(function (previousVal, currentVal) {
            return previousVal + currentVal;
        });
        if (sum > s) { break; }
        if (sum === s) {
            console.log('FOUND IT by adding: ' + a.slice(i, i+j));
            console.log(`Start index: ${i+1} |  End index: ${j}`)
            break;
        }
    }
 }
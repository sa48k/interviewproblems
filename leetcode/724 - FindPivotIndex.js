/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1,2,3,5,6];
var idx = 0;

const sumleft = (idx) => nums.slice(0, idx).reduce((prevVal, currVal) => prevVal + currVal, 0)
const sumright = (idx) => nums.slice(idx+1, nums.length).reduce((prevVal, currVal) => prevVal + currVal, 0)

var pivotIndex = function(nums) {
    for (let i=0; i<nums.length; i++) {
        if (sumleft(i) === sumright(i)) {
            console.log(`Pivot index found at position ${i}`)
            break;
        }
    }
};

pivotIndex(nums);
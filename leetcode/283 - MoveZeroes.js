// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in -place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// use two pointers: one to iterate through the whole array from start to end
// another pointer provides the index that we can write to the array at

var moveZeroes = function (nums) {
    let write = 0
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums) // debug
        let curr = nums[i]  // temp stash
        nums[i] = 0         // make it a zero - if it needs to be overwritten, it will be
        if (curr !== 0) {
            nums[write] = curr
            write++
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,4,0,0,0,7,32,6,12]))
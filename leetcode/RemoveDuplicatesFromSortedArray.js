/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // iterate through the array
    // for each unique value we find, push it to the index
    // and increment the index
    let idx = 1 // index zero must be unique
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) { // unique
            nums[idx] = nums[i]
            idx++
        } 
    }
    return nums.slice(0,idx)
};

console.log(removeDuplicates([1,1,2,3,5,5,6,9,9,9,9,10]))
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.If target exists, then return its index.Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        // find the midpoint between L and R
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] < target) { // target is to the RIGHT - we can discard everything to the left
            left = mid + 1
        } else {            // target is to the LEFT - discard everything to the right
            right = mid - 1
        }
    }
    return -1
};

console.log(search([1,2,3,4,8,9,16], 9))
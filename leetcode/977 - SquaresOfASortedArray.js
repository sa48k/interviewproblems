// Given an integer array nums sorted in non - decreasing order, return an array of the squares of each number sorted in non - decreasing order.
//     Example 1:

// Input: nums = [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]
// Explanation: After squaring, the array becomes[16, 1, 0, 9, 100].
// After sorting, it becomes[0, 1, 9, 16, 100].

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function (nums) {
    // for (let i = 0; i < nums.length; i++) { // slo-o-o-w
    //     result.push(Math.pow(nums[i], 2))
    // }
    // return result.sort((a, b) => a - b)
    
    // better two pointer approach
    // begin by checking outer numbers. place the larger square at idx,
    // then move pointer in we 'write' the results array from end to start
    let left = 0
    let right = nums.length - 1
    let idx = nums.length - 1
    let result = new Array(idx)

    while (left <= right) {
        let squareleft = Math.pow(nums[left], 2)
        let squareright = Math.pow(nums[right], 2)
        if (squareleft > squareright) {
            result[idx] = squareleft
            left++
            idx--
        } else {
            result[idx] = squareright
            right--
            idx--
        }
    }
    return result
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))

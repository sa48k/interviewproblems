/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute force solution, runs in O(n^2)
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         n2 = nums.indexOf(target - nums[i])
//         if (n2 !== -1 && n2 !== i) {
//             return[i, n2]
//         }
//     };
// }

// faster solution using object lookups
var twoSum = function (nums, target) {
    indices = {} // first pass: construct the object
    for (let i = 0; i < nums.length; i++) {
        indices[nums[i]] = i
    }
    
    for (let i = 0; i < nums.length; i++) { // second pass
        const n2 = target - nums[i]         // search for the complementary number that adds to target
        if (indices[n2] !== undefined && indices[n2] !== i) { // make sure we don't use the same value twice
            return [i, indices[n2]]
        }
    }
}

var nums = [3,2,4]
var target = 6
console.log(twoSum(nums, target))
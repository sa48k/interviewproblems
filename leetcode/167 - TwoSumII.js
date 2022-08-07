// Given a 1 - indexed array of integers numbers that is already sorted in non - decreasing order, find 
// two numbers such that they add up to a specific target number.Let these two numbers be numbers[index1] and 
// numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array[index1, index2] of length 2.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while (left <= right) {
        let sum = numbers[left] + numbers[right]
        if (sum === target) return [left+1, right+1]
        if (sum > target) {
            right--
        } else {
            left++
        }
    }
    // no need for a default return - test cases all have exactly one solution
};

console.log(twoSum([2, 7, 11, 15], 17))
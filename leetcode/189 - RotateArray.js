/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length
    nums.reverse()
    let result = [...nums.slice(0, k).reverse(),
              ...nums.slice(k, nums.length).reverse()]
    return result
};

console.log(rotate([1,2,3,4,5,6,7], 3))
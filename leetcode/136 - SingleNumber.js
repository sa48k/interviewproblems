/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.delete(nums[i])
        } else {
            map.set(nums[i], 1)
        }
    };
    // console.log(map)
    return map.keys().next().value
};

console.log(singleNumber([1,2,2,3,3]));
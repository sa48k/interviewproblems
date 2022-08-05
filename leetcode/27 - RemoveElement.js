var removeElement = function (nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i]
            index++
        }
    }
    return index;
};

console.log(removeElement([1, 2, 2, 2, 2, 2, 3, 4, 5, 6], 2)) // (5) [1, 3, 4, 5, 6]
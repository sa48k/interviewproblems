var mergeTwoLists = function (list1, list2) {
    return list1.concat(list2).sort();
};

console.log(mergeTwoLists([1, 1, 3, 5], [2, 3, 3, 7]));
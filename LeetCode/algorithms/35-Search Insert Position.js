// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0



// solution:

var searchInsert = function(nums, target) {
    let leftPointer = 0
    let rightPointer = nums.length - 1
    
    while (leftPointer <= rightPointer) {
        let med = Math.ceil((leftPointer + rightPointer) / 2)
        if (nums[med] === target) return med
        if (nums[med] > target) {
            rightPointer = med - 1
        }
        if (nums[med] < target) {
            leftPointer = med + 1
        }
    }
    return rightPointer + 1
    
};
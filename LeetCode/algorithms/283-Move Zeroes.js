// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


// solution:

var moveZeroes = function(nums) {
    
    let p1 = 0
    let p2 = 1
    
    while (p2 < nums.length) {
        if (nums[p1] !== 0) {
            p1++
        } else {
            if(nums[p2] !== 0) {
                nums[p1] = nums[p2]
                nums[p2] = 0
                p1++
            }
        }
        p2++
    }
    
};
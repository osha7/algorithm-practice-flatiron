// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// 
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

function indicesTarget(array, num) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === num) {
                return [i, j]
            }
        }
    }
    return false
}

// Big O (O(n^2))
// Space complexity is (O(1))

function indicesTarget(array, target) {
    let map = new Map()
    for(let i = 0; i < array.length; i++) {
        let num = array[i]
        if(map.get(num) === undefined) {
            map.set(target-num, i)
        } else {
            return [map.get(num), i]
        }
    }
    return false
}

// indicesTarget([2,7,11,15], 9)
// ===> [0, 1]

let twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return false
};
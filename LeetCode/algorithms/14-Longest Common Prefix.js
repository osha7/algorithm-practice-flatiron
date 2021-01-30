// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


// solutions:

/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     let prefix = ""
//     if (strs.length === 0) return prefix
//     for (let i = 0; i < strs[0].length; i++) {
//         const character = strs[0][i]
//         for (let j = 0; j < strs.length; j++) {
//             if (strs[j][i] !== character) return prefix
//         }
//         prefix = prefix + character
//     }
//     return prefix
// };

var longestCommonPrefix = function(strs) {
    strs = strs.sort((a, b) => a.length - b.length)
    
    let minStr = strs[0] || ""
    
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(minStr) !== 0) {
            // console.log(strs[i].indexOf(minStr))
            minStr = minStr.substring(0, minStr.length - 1)
        }
    }
    return minStr
}
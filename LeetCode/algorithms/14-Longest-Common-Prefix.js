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

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
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

// let strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    // strs = strs.sort((a, b) => b.length - a.length)          // ["flower", "flight", "flow"]
    
    let minStr = strs[0] || ""  // "flower" // flowe
    
            //    1             3
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(minStr) !== 0) {     // 0  // -1 (because flower is not in flight) //
            // console.log(strs[i].indexOf(minStr)) 
            minStr = minStr.substring(0, minStr.length - 1) //0,  // flowe
        }
    }
    return minStr
}

console.log(longestCommonPrefix(strs = ["flower","flow","flight"]))
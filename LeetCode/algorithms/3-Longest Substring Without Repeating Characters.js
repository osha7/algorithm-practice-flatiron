// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


// solutions: 

/**
 * @param {string} s
 * @return {number}
 */

// https://youtu.be/1NzWlRP3yfI (for both)


// var lengthOfLongestSubstring = function(s) {
//     let count = 0
    
//     for(let i = 0; i < s.length; i++) {
//         let char = s.charAt(i)
//         let set = new Set([char])
        
//         for (let j = i + 1; j < s.length; j++){
//             let char = s.charAt(j)
//             if (set.has(char)) {
//                 break
//             } else {
//                 set.add(char)
//             }
//             count = Math.max(count, set.size)
//         }
//     }
//     return count
// }


// sliding window method:

var lengthOfLongestSubstring = function(s) {
    if (s === null || s.length === 0) return 0
    
    let count = 0
    let i = 0 //start of window index
    let j = 0 //end of window index
    let n = s.length
    
    let set = new Set()
    
    while (i < n && j < n) {
        let char = s.charAt(j)
        if (!set.has(char)) {
            set.add(char)
            j++
            count = Math.max(count, set.size)
        } else {
            set.delete(s.charAt(i))
            i++
        }
    }
    return count
};
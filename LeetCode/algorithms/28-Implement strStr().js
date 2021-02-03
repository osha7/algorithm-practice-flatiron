// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0
 

// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.


// solutions:

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (haystack === needle) return 0;
    const len = needle.length
    if (haystack.length < len) return -1
    
    let i = 0
    
    while ((haystack.substring (i, len + i) !== needle) && i < haystack.length) i++;
    return (i >= haystack.length ? -1: i)
};

// code above is building this builtin function .indexOf() :

// var strStr = function(haystack, needle) {
//     // console.log (haystack.includes(needle))
//     // console.log (haystack.indexOf(needle))

//     return (haystack.indexOf(needle))
// }
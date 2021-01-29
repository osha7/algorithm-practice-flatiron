// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].


// solutions:

// /**
//  * @param {string} s
//  * @return {number}
//  */

var romanToInt = function(s) {
    const dictionary = { I:1, V:5, X:10, L:50, C:100, D:500, M: 1000 }
    
    let sum = 0
    let i = 0
    
    while (i < s.length) {
        // console.log(dictionary[s[i]])
        // i++
        if (dictionary[s[i]] < dictionary[s[i+1]]) {
            sum += (dictionary[s[i+1]] - dictionary[s[i]])
            i += 2
        } else {
            sum += dictionary[s[i]]
            i++
        }
    }
    return sum
}

// var romanToInt = function(s) {
//     arrayOfS = s.split("")
//     let sum = 0
//     let i = 0
//     while (i < arrayOfS.length) {
//         if (arrayOfS[i] === 'I' && arrayOfS[i+1] === 'V') {
//             sum = sum + 4
//             i = i + 2
//         }
//         if (arrayOfS[i] === 'I' && arrayOfS[i+1] === 'X') {
//             sum = sum + 9
//             i = i + 2
//         } 
//         if (arrayOfS[i] === 'I') {
//             sum = sum + 1 
//             i++
//         }
//          if (arrayOfS[i] === 'V') {
//             sum = sum + 5 
//             i++
//         }
//         if (arrayOfS[i] === 'X' && arrayOfS[i+1] === 'L') {
//             sum = sum + 40
//             i = i + 2
//         }
//         if (arrayOfS[i] === 'X' && arrayOfS[i+1] === 'C') {
//             sum = sum + 90
//             i = i + 2
//         }
//          if (arrayOfS[i] === 'X') {
//             sum = sum + 10 
//             i++
//         }
//          if (arrayOfS[i] === 'L') {
//             sum = sum + 50
//             i++
//         }
//         if (arrayOfS[i] === 'C' && arrayOfS[i+1] === 'D') {
//             sum = sum + 400
//             i = i + 2
//         }
//         if (arrayOfS[i] === 'C' && arrayOfS[i+1] === 'M') {
//             sum = sum + 900
//             i = i + 2
//         }
//          if (arrayOfS[i] === 'C') {
//             sum = sum + 100 
//             i++
//         }
//          if (arrayOfS[i] === 'D') {
//             sum = sum + 500
//             i++
//         }
//          if (arrayOfS[i] === 'M') {
//             sum = sum + 1000
//             i++
//         }
//     }
//     return sum
// };
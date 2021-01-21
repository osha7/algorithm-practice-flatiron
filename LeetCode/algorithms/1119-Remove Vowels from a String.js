// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

 

// Example 1:

// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"
// Example 2:

// Input: s = "aeiou"
// Output: ""
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of only lowercase English letters.


//  * @param {string} s
//  * @return {string}

var removeVowels = function(s) {
    let arrayOfString = s.split('')
    let newString = []
    
    for (let i = 0; i < s.length; i++){
        // return (arrayOfString[i+1] === "a")
        if (arrayOfString[i] !== "a" && arrayOfString[i] !== "e" && arrayOfString[i] !== "i" && arrayOfString[i] !== "o" && arrayOfString[i] !== "u") {
            newString.push(arrayOfString[i])
            
        }
    } 
    
    return (newString.join(''))
    
};

// OR:

// var removeVowels = function(s) {
//     return [...s].filter(each => !'aeiou'.includes(each)).join('');
// };
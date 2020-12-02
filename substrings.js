// Given two strings, return an array of every matching substring
// Example Input and Output
// in: 'te', 'test'
// Out: ['t', 'te', 'e']
// Assume you are given a single word strings with no white space.
// Letter case does not matter! the return should be in all lowercase or all uppercase.
// If there is no sub string return false.
// Everything else is up to your discretion!
// Have fun :partymeow:

// str1 = "rabbit"
// str2 = "rabbi"

// function matchSubString(str1, str2) {
//     // let arrayOutput = []
//     str1.toLowerCase()
//     str2.toLowerCase()
//     // let array1 = str1.toLowerCase().split("")
//     // let array2 = str2.toLowerCase().split("")
//     function findSubStrings(string1, string2, arrayOutput = []) {
//         if (string2.includes(string1) && !arrayOutput.includes(string1)){
//             arrayOutput.push(string1)
//         }
//         string1 = string1.split("")
//         let lastLetter = string1.pop()
        
//         if (string2.includes(lastLetter) && !arrayOutput.includes(lastLetter)){
//             arrayOutput.push(lastLetter)
//         }
//         string1 = string1.join("")
//         if (string2.includes(string1) && !arrayOutput.includes(string1)){
//             arrayOutput.push(string1)
//         }
//         string1 = string1.split("")
//         let firstLetter = string1.unshift()
//         if (string2.includes(firstLetter) && !arrayOutput.includes(firstLetter)){
//             arrayOutput.push(firstLetter)
//         }
        
//         if (string1.length === 0 ) {
//             return (arrayOutput.length > 0 ? arrayOutput : false)
//         } else {
//             string1.join("")
//             findSubStrings(string1, string2, arrayOutput)
//         }
//     }

//     return findSubStrings(str1, str2)
// }

str1 = "rabbit"
str2 = "rabbi"


function matchSubString(str1, str2) {
    let arrayOutput = []

    for (let i = 0; i < str1.length; i++){
        for (let j = i + 1; j < str1.length; j++) {
            let chars = str1.slice(i, j).toLowerCase()
            console.log(chars, str1[i], str1[j])
            if (str2.toLowerCase().includes(chars) && !arrayOutput.includes(chars)) {
                arrayOutput.push(chars)
            }
        }
    }

    if (arrayOutput.length === 0) {
        return false
    }
    return arrayOutput
}

matchSubString(str1, str2)

// function maskString(str) {
//     if (str.length > 4) {
//         let j = str.length - 4
//         let newStr = str.split("")
        
//         for (let i = 0; i < j; i++) {
//             newStr[i] = "#"
//         }
//         return newStr.join("")
//     } else {
//         return str
//     }
// }


const mask = (str, maskChar = "#") => str.slice(-4).padStart(str.length, maskChar)

// padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

// str.padStart(targetLength [, padString])

// const str1 = '5';

// console.log(str1.padStart(2, '0'));
// // expected output: "05"

// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

// console.log(maskedNumber);
// // expected output: "************5581"

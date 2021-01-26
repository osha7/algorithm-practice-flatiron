// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0
 

// Constraints:

// -231 <= x <= 231 - 1




// solutions:

var reverse = function(x) {
    if (x < 0) return -1 * reverse(-x)
    const solution = (x + "").split("").reverse().join("")
    return (solution > 2 ** 31 - 1) ? 0 : solution
    
};

// var reverse = function(x) {
//     let num;
//     let upperLimit = Math.pow(2, 31) - 1;
//     let lowerLimit = Math.pow(-2, 31);
//     if(x === 0){
//         return 0;
//     } else if ( x > 0) {
//         let string = x.toString().split('').reverse().join('');
//         num = parseInt(string);
//     } else {
//         let string = x.toString().split('').reverse().join('');
//         num = parseInt('-' + string);
//     }
//     return upperLimit > num && num > lowerLimit ? num : 0
// };


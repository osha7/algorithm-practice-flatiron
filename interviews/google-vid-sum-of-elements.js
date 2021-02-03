

// findPairsThatAddToSum = (array, sum) => {
//     let hash = {}
//     for (let i = 0; i < array.length; i++) {
//         let element = array[i]
//         hash[element] = sum - element
//     }
// }

let array1 = [1, 2, 3, 9];
let array2 = [1, 2, 4, 4];
let array3 = [-2, 2, 4, 10];

let sum = 8;

// if #'s are SORTED:
// LINEAR : Big O(n)
findPairsThatAddToSum = (array, sum) => {
    let i = 0;
    let j = array.length - 1;

    while (i !== j) {
        if (array[i] + array[j] > sum) {
            j--;
        }
        if (array[i] + array[j] < sum) {
            i++
        }
        if (array[i] + array[j] === sum) {
            // return ([array[i], array[j]])
            return true
        }
    }
    // return -1
    return false
};
console.log(findPairsThatAddToSum(array1, 8))
// Questions:

// are all elements numbers or could they be floats?
// are negative numbers allowed?

// What is format of the expected output / what should function return

// array1 = [1, 2, 3, 9]
// [ 1, 2, 3, 9 ]
// > sum = 8
// 8
// > hash = {}
// {}
// > i = 0
// 0
// > element = array1[i]
// 1
// > hash[element] = sum - element
// 7
// > hash
// { '1': 7 }
// > i=1
// 1
// > element = array1[i]
// 2
// > hash[element] = sum - element
// 6
// > hash
// { '1': 7, '2': 6 }
// > i=2
// 2
// > element = array1[i]
// 3
// > hash[element] = sum - element
// 5
// > hash
// { '1': 7, '2': 6, '3': 5 }
// > i=3
// 3
// > element = array1[i]
// 9
// > hash[element] = sum - element
// -1
// > hash
// { '1': 7, '2': 6, '3': 5, '9': -1 }
// >

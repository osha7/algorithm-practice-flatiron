//https://www.youtube.com/watch?v=XKu_SEDAykw&ab_channel=LifeatGoogle

let array1 = [1, 9, 3, 2];
let array2 = [4, 2, 4, 1];
let array3 = [-2, 2, 4, 10];

let sum = 8

// // if #'s are NOT SORTED:
// // LINEAR : Big O(n)
findPairThatAddsToSum = (array, sum) => {
    let hash = {}

    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let compliment = sum - element
        console.log(compliment, hash)
        // console.log(hash[compliment])

        if (hash[compliment] !== undefined) {
            // return [hash[compliment], i] 
            return true
        } else {
            (hash[element] = i)
        }
    }
    // return -1
    console.log("David", hash)
    return false
}

// function hasPairWithSum2(arr, sum) {
//     const mySet = new Set();
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//         let element = arr[i]
//         if (mySet.has(element)) {
//             return true
//         }
//         mySet.add(sum - element);
//     }
//     return false;
// }


console.log(findPairThatAddsToSum(array3, 8))

// let array1 = [1, 2, 3, 9];
// let array2 = [1, 2, 4, 4];
// let array3 = [-2, 2, 4, 10];

// let sum = 8;

// // if #'s are SORTED:
// // LINEAR : Big O(n)
// findPairThatAddsToSum = (array, sum) => {
//     let i = 0;
//     let j = array.length - 1;

//     while (i !== j) {
//         if (array[i] + array[j] > sum) {
//             j--;
//         }
//         if (array[i] + array[j] < sum) {
//             i++
//         }
//         if (array[i] + array[j] === sum) {
//             // return ([array[i], array[j]])
//             return true
//         }
//     }
//     // return -1
//     return false
// };
// console.log(findPairThatAddsToSum(array1, 8))



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

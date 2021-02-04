// function fibonnaciSequence(n) {
//     let newArray = []
//     for (let i = 0; i < n; i++) {
//         if (i === 0 || i === 1) {
//             newArray.push(i)
//         } else {
//             let theSumAtI = newArray[i - 1] + newArray[i - 2]
//             newArray.push(theSumAtI)
//         }
//     }
//     return newArray
// }

// console.log(fibonnaciSequence(10))

const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )

console.log(fibonacci(20))
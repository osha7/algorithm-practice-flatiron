function miniMaxSum(arr) {
    let newArray = arr.sort((a, b) => a - b)
    const minSum = newArray.slice(0, arr.length-1).reduce((a, b) => a + b)
    const maxSum = newArray.slice(1, arr.length).reduce((a, b) => a + b)
    console.log(minSum, maxSum)
}
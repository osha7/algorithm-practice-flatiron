# .reduce()

    ar.reduce((a, b) => a + b, 0)

# .sort()

    function compareNumbers(a, b) {
        return a - b;
    }

    reverse sort:
    function compareNumbers(a, b) {
        return b - a;
    }

# .slice()

    var new_arr = arr.slice(2);
    Output:
        [23,56,87,32,75,13]
        [87,32,75,13]

    var new_arr = arr.slice(2,4);
    Output:
        [23,56,87,32,75,13]
        [87,32]

# .forEach()

    <!-- BIG 0(n) -->

    ES5:
    function compressAllBoxes(boxes) {
        boxes.forEach((item) {
            console.log(item)
        })
    }

    ES6:
    compressAllBoxes = boxes =>{
        boxes.forEach(box => console.log(box))
    }

# .reduce()

    const runningSum = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
    }

    The reducer function takes four arguments:

    Accumulator
    Current Value
    Current Index
    Source Array

    It takes four arguments:

    currentValue
    The current element being processed in the array.

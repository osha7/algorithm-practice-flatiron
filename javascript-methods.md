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

    ALPHABETICAL:
        let array = ["flower", "flow", "flight"]
        array.sort()          =>      ["flight", "flow", "flower"]
    BY LENGTH:
        array.sort((a, b) => a.length - b.length)
        ["flow", "flight", "flower"]

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

# substring()

    **** extracts the characters in a string between "start" and "end", includes "start", does not include "end" ***
    var str = "Hello world!";
    var res = str.substring(1, 4);        =>  res = "ell"
    const str = 'Mozilla'
    console.log(str.substring(2));        =>  "zilla"

# Math.floor()

    let middleIndex = Math.floor(array.length / 2)

# Math.max()

    let candies = [4,2,1,1,2]
    let maxNum = Math.max(...candies) // output => 4

# slice() method

    returns a shallow copy of a portion of an array into a new array object
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
        // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
        // expected output: Array ["camel", "duck"]

# splice() method

    changes the contents of an array by removing or replacing existing elements and/or adding new elements

    let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    let removed = myFish.splice(2, 0, 'drum')

        // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
        // removed is [], no elements removed

    let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
    let removed = myFish.splice(3, 1)

        // myFish is ["angel", "clown", "drum", "sturgeon"]
        // removed is ["mandarin"]

    let myFish = ['angel', 'clown', 'drum', 'sturgeon']
    let removed = myFish.splice(2, 1, 'trumpet')

        // myFish is ["angel", "clown", "trumpet", "sturgeon"]
        // removed is ["drum"]

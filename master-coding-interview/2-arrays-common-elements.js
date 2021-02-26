// if given two arrays:

// does the second array share any common elements to the first array:


// solution:

array1 = ['a', 'b', 'c', 'x']
array2 = ['z', 'y', 'x']

function commonElementsInArrays(array1, array2) {
    let hash = {}

    for (let i = 0; i < array1.length; i++) {
        let element = array1[i]
        if (!hash[element]) {
            hash[element] = true
        }
    }

    for (let j = 0; j < array2.length; j++) {
        let newElement = array2[j]
        // if (hash[newElement] === true) {
        if (hash[newElemnt]) {
            return true
        }
    }

    return false
}
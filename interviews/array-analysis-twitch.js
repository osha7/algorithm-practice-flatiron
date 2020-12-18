function findNumberWithNOccurrences(numbers, n) {
    let newObject = {}
    
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i]
        newObject[element] = newObject[element] ? newObject[element] + 1 : 1
    }
    return (Object.keys(newObject).find(key => newObject[key] === n))
}
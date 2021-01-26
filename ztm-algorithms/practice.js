let boxes = [1, 2, 3, 4, 5]

function logPairs(boxes) {
    for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
            console.log(([boxes[i], boxes[j]]))
        }
    }
}

logPairs(boxes)
// Big O = O(n^2) :
let boxes = [1, 2, 3, 4, 5]

function logPairs(boxes) {
    for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
            console.log(([boxes[i], boxes[j]]))
        }
    }
}

logPairs(boxes)

// ------------------------------------------------------

// Twitter example
// find 1st and find nth (last item):

const array = ['hi', 'next', 'last']
array[0] //oldest tweet    =>   O(1)
array[array.length - 1] //last tweet (newest) =>  O(1)

// *** //

// compare tweet dates
const newArray = [{
    tweet: 'hi',
    date: 2012
    }, {
    tweet: 'next',
    date: 2014
    }, {
    tweet: 'last',
    date: 2018
    }];

// comparing each item in the array then comparing dates (nested loops)  => O(n^2)

// *** //

'helsadhgieirhlskbfvnsvsfvn'.length   // Big O depends upon language and how it has built the .length method to work
// javascript .length has built in method for each string 
// so for js .length is not a function, it's simply a property
// .length doesn't work like =>  .length()
// ^^this above has O(1) bc .length is just a property of the string in js

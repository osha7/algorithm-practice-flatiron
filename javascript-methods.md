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

        
# Math.abs()

    ---Math.abs(x) returns the absolute positive value of x

    Math.abs(-10.2);     //===> 10.2
    Math.abs(-33);       //===> 33

# Math.ceil()

    ---Math.ceil(x) returns the value of x rounded UP to its nearest integer

    Math.ceil(7.8)      //===> 8
    Math.ceil(5.3)      //===> 6

# Math.floor()

    ---Math.ceil(x) returns the value of x rounded DOWN to its nearest integer

    Math.floor(4.2)     //===> 4
    Math.floor(3.9)     //===> 3

    ex: let middleIndex = Math.floor(array.length / 2)

# Math.log10(x)

    ---Returns the base-10 logarithm of x.

# Math.log2(x)

    ---Returns the base-2 logarithm of x.

# Math.max()

    ---finds max number in string or array input

    let candies = [4,2,1,1,2]
    let maxNum = Math.max(...candies) // ===> 4

    console.log(Math.max(1, 3, 2));
    // expected output: 3

    console.log(Math.max(-1, -3, -2));
    // expected output: -1

    const array1 = [1, 3, 2];
    console.log(Math.max(...array1));
    // expected output: 3

# Math.min()

    ---Find the lowest value in a list of arguments/elements

    Math.min(0, 150, 30, 20, -8, -200);     //===> -200

    const array1 = [1, 3, 2];
    console.log(Math.max(...array1));
    // expected output: 1

# Math.PI

    ---Ratio of the a circle's circumference to its diameter; approximately 3.14159.

# Math.pow()

    ---Math.pow(x, y) => returns the value of x to the power of y

    Math.pow(10, 2);      //===> returns 100

# Math.random()

    ---returns a random number between 0 and 1

    Math.random();      //===> 0.8952829155429987
    Math.random() * 10;     //===> 9.599594932373712

# Math.round()

    ---returns the Int rounded to nearest integer

    Math.round(4.7);    //===> returns 5
    Math.round(4.4);    //===> returns 4

# Math.sign(x)

    ---Returns the sign of the x, indicating whether x is positive, negative, or zero.

    Math.sign(1);       //===> 1
    Math.sign(10);      //===> 1
    Math.sign(0);       //===> 0
    Math.sign(-1);      //===> -1
    Math.sign(-10);     //===> -1

# Math.sqrt()

    ---Math.sqrt(x) => returns square root of x

    Math.sqrt(144);    //===> returns 12

# Math.trunc(x)

    ---Returns the integer portion of x, removing any fractional digits.

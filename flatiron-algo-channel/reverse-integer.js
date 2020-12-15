var reverse = function(x) {
    let num;
    let upperLimit = Math.pow(2, 31) - 1;
    let lowerLimit = Math.pow(-2, 31);
    if(x === 0){
        return 0;
    } else if ( x > 0) {
        let string = x.toString().split('').reverse().join('');
        num = parseInt(string);
    } else {
        let string = x.toString().split('').reverse().join('');
        num = parseInt('-' + string);
    }
    return upperLimit > num && num > lowerLimit ? num : 0
};
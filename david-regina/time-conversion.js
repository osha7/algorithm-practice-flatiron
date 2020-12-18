const arr = s.slice(0,8).split(':');
arr[0] = (s.indexOf('PM') > -1) ?
         (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
         (arr[0] == 12 ? '00' : arr[0]);
return arr.join(':');


// https://codeburst.io/solving-on-of-the-challenges-from-hackerrank-with-javascript-481aa198acb7



// s = '07:05:45PM'
// "07:05:45PM"
// s.slice(0,8)
// "07:05:45"
// s
// "07:05:45PM"
// s.slice(0,8).split(':')
// (3) ["07", "05", "45"]
// arr = s.slice(0,8).split(':')
// (3) ["07", "05", "45"]
// arr[0]
// "07"
// s.indexOf('PM')
// 8
// s.indexOf('PM') > -1
// true
// arr[0] == 12
// false
// Number(arr[0]) + 12
// 19
// s.indexOf('PM')
// 8
// s = '07:05:45AM'
// "07:05:45AM"
// s.indexOf('PM')
// -1
// s.slice(0,8).split(':')
// (3) ["07", "05", "45"]
// arr.join(':')
// "07:05:45"
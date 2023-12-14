let n = 1234;
var isPalindrome = function(x) {
    //return x === parseInt(x.toString().split('').reverse().join(''))

    let _x = x;
    let reverse = 0;
    while (_x > 0) {
        const mod = _x % 10;
        reverse = reverse * 10 + mod;
        _x = Math.floor(_x / 10);
    }
    return reverse === x;
};
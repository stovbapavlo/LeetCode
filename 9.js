let n = 1234;
var isPalindrome = function(x) {
    return x === parseInt(x.toString().split('').reverse().join(''))
};
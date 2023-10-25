/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) return false;

    return (Math.log(n) / Math.log(2)).toFixed(10) % 1 === 0;
};

//solution for bitary trick

//return n > 0? !(n & n - 1) : false;
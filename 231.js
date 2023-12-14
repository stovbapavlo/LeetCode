/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
   /* if(n <= 0) return false;

    return (Math.log(n) / Math.log(2)).toFixed(10) % 1 === 0;*/

    if(n === 1 || n === 2) return true;

    let value = 1;

    for(let i = 0; i <= n; i += n) {
        if(i === n) {
            for(let j = 1; j <= i; j *= 2) {
                value = j;
            }

            break;
        }
    }

    return value === n ? true : false;
};

//solution for bitary trick

//return n > 0? !(n & n - 1) : false;
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    const power = i => {
        if (i > n) return false
        if (i === n) return true
        return power(i * 2)
    }

    return power(1)
};



// return n > 0 && (n & (n - 1)) === 0;
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) count = 0
        else count++

        if (count === 3) return true
    }
    return false
};
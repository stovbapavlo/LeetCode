/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let left = 0;
    let right = Math.ceil(Math.sqrt(c));

    while (left<=right ){
        const x = left**2 + right**2;

        if (c > x){
            left++
        }
        else if (c < x){
            right--
        }
        else return true
    }
    return false
};
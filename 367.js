/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1)
        return true;

    let l = 1;
    let r = Math.floor(num / 2);

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        let mSqr = m * m;

        if (mSqr === num)
            return true;
        else if (mSqr < num)
            l = m + 1;
        else
            r = m - 1;
    }

    return false;
};
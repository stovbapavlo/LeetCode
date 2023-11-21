/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    function rev(num) {
        let rev = 0;
        while(num > 0){
            rev = rev * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return rev;
    }
    let res = 0;
    let count = {};

    for(let n of nums){
        const r = rev(n);
        cur = count[n - r] || 0;
        res += cur;
        count[n - r] = 1 + cur;
    }

    return res % (10**9 + 7);
};
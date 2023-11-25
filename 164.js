/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {

    let n = nums.length;

    if(n < 2) return 0;

    nums.sort((a, b) => a - b)
    let max = 0;

    for(let i = n - 1; i > 0; i--){
        let diff = nums[i] - nums[i - 1];
        if(max < diff) max = diff;
    }
    return max;
};
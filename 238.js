/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [1, nums[0]];
    for(let i = 1; i < nums.length - 1; i++){
        res.push(res[i] * nums[i])
    }

    let postFix = 1
    for(let i = nums.length - 1; i >= 0; i--){
        res[i] *= postFix;
        postFix *= nums[i]
    }

    return res;
};
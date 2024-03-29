/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let max = - 1;
    for(let i of nums) {
        max = Math.max(max, i)
    }
    let ans = 0,
        l = 0,
        c = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === max) c++;

        while(c >= k) {
            if(nums[l] === max) c--;
            l++;
        }
        ans += l;
    }

    return ans
};
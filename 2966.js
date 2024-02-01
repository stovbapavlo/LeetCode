/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    const n = nums.length;
    const res = [];
    nums.sort((a,b)=>a-b);
    for(let i = 0; i<n; i++) {
        if((nums[i+1] - nums[i] > k) || (nums[i+2] - nums[i+1] > k) || (nums[i+2] - nums[i] > k)){
            return [];
        }
        res.push([nums[i], nums[i+1], nums[i+2]]);
        i += 2;
    }
    return res;
};
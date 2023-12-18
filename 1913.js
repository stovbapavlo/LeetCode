/*
nums.sort((a,b) => a - b);
let n = nums.length;
*/

//return (nums[n - 1] * nums[n -2]) - (nums[0] * nums[1]);

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let min0=Math.min(...nums)
    let maxN=Math.max(...nums)
    nums.splice(nums.indexOf(min0),1)
    nums.splice(nums.indexOf(maxN),1)
    let min1=Math.min(...nums)
    let maxM=Math.max(...nums)

    return maxM*maxN - min0*min1
};

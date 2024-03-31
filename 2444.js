/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let minI = -1, maxI = -1, left = -1, right = 0;
    let count = 0;

    while(right < nums.length) {
        if(nums[right] < minK || nums[right] > maxK) {
            minI = right;
            maxI = right;
            left = right
        }
        minI = (nums[right] === minK) ? right : minI
        maxI = (nums[right] === maxK) ? right : maxI

        count += Math.min(minI, maxI) - left
        right++
    }
    return count
};
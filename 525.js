/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map();
    let sum = 0;
    let subArrayLength = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if(sum === 0) {
            subArrayLength = i + 1;
        }
        else if(map.has(sum)) {
            subArrayLength = Math.max(subArrayLength, i - map.het(sum));
        }
        else {
            map.set(sum, i)
        }
    }
    return subArrayLength
};
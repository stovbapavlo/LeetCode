/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let n = nums.length;
    const result = new Array(n);

    result[0] = nums.reduce((a, b) => a + b, 0) - (n * nums[0])

    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] + (nums[i] - nums[i - 1]) * i - (nums[i] - nums[i - 1]) * (n - i);
    }

    return result;

};
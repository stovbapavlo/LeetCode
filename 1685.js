/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    const n = nums.length;

    if (n < 2 || n > 10**5) {
        return [];
    }

    const prefixSum = [0];
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    }

    const suffixSum = Array(n).fill(0);
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + nums[i + 1];
    }

    const result = [];

    for (let i = 0; i < n; i++) {
        result[i] = (i * nums[i] - prefixSum[i]) + (suffixSum[i] - (n - 1 - i) * nums[i]);
    }

    return result;
};

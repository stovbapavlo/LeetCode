/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let left = 0, right = 0, res = 0;
    let mini = [];
    let maxi = [];

    while (right < nums.length) {
        while (mini.length && mini[mini.length - 1] > nums[right]) mini.pop();
        mini.push(nums[right]);

        while (maxi.length && maxi[maxi.length - 1] < nums[right]) maxi.pop();
        maxi.push(nums[right]);

        while (maxi[0] - mini[0] > limit) {
            if (nums[left] === maxi[0]) maxi.shift();
            if (nums[left] === mini[0]) mini.shift();
            left++;
        }

        res = Math.max(res, right - left + 1);
        right++;
    }

    return res;
};
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let left = 0, right=0, min = [], max = [];

    while(right<nums.length) {
        let num = nums[right++];

        while (min.length && num < min[min.length-1]) min.pop();
        while (max.length && num > max[max.length-1]) max.pop();
        max.push(num);
        min.push(num);

        if(max[0] - min[0] <= limit) continue;

        num = nums[left++];
        if (num === max[0]) max.shift();
        if (num === min[0]) min.shift();
    }

    return right-left;
};
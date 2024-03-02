/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((element) => Math.pow(element, 2)).sort((a, b) => a - b)
};
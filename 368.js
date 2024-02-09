/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    const count = new Array(len).fill(1);
    const prev = new Array(len).fill(-1);
    let maxIndex = 0;

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && count[j] + 1 > count[i]) {
                count[i] = count[j] + 1;
                prev[i] = j;
            }
        }

        if (count[i] > count[maxIndex]) {
            maxIndex = i;
        }
    }

    const result = [];
    let k = maxIndex;
    while (k >= 0) {
        result.push(nums[k]);
        k = prev[k];
    }

    return result.reverse();

};
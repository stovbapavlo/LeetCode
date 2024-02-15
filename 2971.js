/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b)
    while(nums.length > 2) {
        const largest = nums.pop();
        const sum = nums.reduce((acc, curr) => acc + curr, 0);

        if (largest < sum) {
            return sum + largest;
        }
    }

    return -1;
};
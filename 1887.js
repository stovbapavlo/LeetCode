/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);

    let counter = 0;

    for( let i = n - 1; i > 0; i--)
    {
        if(nums[i] !== nums[i - 1])
        {
            counter += n - i;
        }
    }
    return counter;
};
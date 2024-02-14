/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positiveArr = [];
    let negativeArr = [];

    for(let element of nums) {
        if(element > 0)
            positiveArr.push(element);
        else
            negativeArr.push(element);
    }
    for(let i = 0; i < nums.length / 2; i++) {
        nums[2 * i] = positiveArr[i];
        nums[2 * i + 1] = negativeArr[i];
    }
    return nums;
};
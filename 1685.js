/*
*
 * @param {number[]} nums
 * @return {number[]}
var getSumAbsoluteDifferences = function(nums) {
    let n = nums.length;
    const result = new Array(n);

    result[0] = nums.reduce((a, b) => a + b, 0) - (n * nums[0])

    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] + (nums[i] - nums[i - 1]) * i - (nums[i] - nums[i - 1]) * (n - i);
    }

    return result;

};*/

/**
 * @param {number[]} nums
 * @return {number[]}
var getSumAbsoluteDifferences = function(nums) {
    let res = []
    let sum = nums.reduce((a, b) => a + b)
    let len = nums.length
    let sumR = 0
    let sumL = 0
    for (let i = 0; i < len; i++) {
        let cur = nums[i]
        sumL += nums[i]
        sumR = sum - sumL
        let n = i + 1
        let A = cur * n - sumL
        let B = sumR - cur * (len - n)
        res.push(A + B)
    }
    return res

};*/

let nums = [1,4,6,8,10];

let result = [];

let sum = 0

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        sum += Math.abs(nums[i] - nums[j]);

    }
    result.push(sum);
    sum = 0;
}
console.log(result);
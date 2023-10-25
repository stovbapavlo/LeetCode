/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arrClone = nums.slice();
    arrClone = arrClone.concat(nums);

    return arrClone;

};
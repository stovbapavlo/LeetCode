/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let output = [];
    let map = new Map();

    for(let num of nums){
        let idx = map.get(num) || 0;
        let arr = output[idx] || [];

        arr.push(num);
        output[idx] = arr;
        map.set(num, idx + 1);
    }

    return output;
};
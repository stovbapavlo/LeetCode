let reduce = function(nums, fn, init) {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return `The final answer is ${init}`;
};

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) { return accum + curr; }
let init = 0;

let result = reduce(nums, fn, init);
console.log(result);



/*
/!**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 *!/
let reduce = function(nums, fn, init) {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init;
};*/

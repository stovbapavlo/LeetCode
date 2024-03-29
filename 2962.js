
const countSubArrays = function(nums, k) {
    let subArrays = 0, count = 0;
    const max = Math.max(...nums);
    for (let l = 0, r = 0; r < nums.length; r++) {
        if (nums[r] === max) count++;
        while (count >= k) {
            subArrays += nums.length - r;
            if (nums[l++] === max) count--;
        }
    }
    return subArrays;
}
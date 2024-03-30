/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
    return subarraysWithAtMostKDistinct(nums, k) - subarraysWithAtMostKDistinct(nums, k - 1);
}

function subarraysWithAtMostKDistinct(nums, k) {
    let ans = 0;
    const count = new Array(nums.length + 1).fill(0);

    for (let l = 0, r = 0; r < nums.length; ++r) {
        if (++count[nums[r]] === 1)
            --k;
        while (k === -1)
            if (--count[nums[l++]] === 0)
                ++k;
        ans += r - l + 1;
    }

    return ans;
}
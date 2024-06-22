/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let n = nums.length, ans = 0
    for (let h = -1, i = 0, j = 0; j < n; j++) {
        k -= nums[j] & 1
        if (k < 0)
            h = i++, k++
        if (!k) {
            while (nums[i] % 2 === 0)
                i++
            ans += i - h
        }
    }
    return ans
};
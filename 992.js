/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {

    const getSubArray = (nums, k)  => {
        let left = 0, right
        let ans = 0
        let map = new Map()

        for(right = 0; right < nums.length; ++right) {
            let item = nums[right]

            if(!map.has(item) || map.get(item) === 0) {
                k--
            }
            map.set(item, (map.get(item) || 0) + 1)

            while(k < 0) {
                map.set(nums[left], map.get(nums[left]) - 1)
                if(map.get(nums[left]) === 0) k++
                left++
            }
            ans += (right - left + 1)

        }
        return ans

    }
    return getSubArray(nums, k) - getSubArray(nums, k - 1)
};
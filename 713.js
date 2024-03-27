var numSubarrayProductLessThanK = function(nums, k) {
    let n = nums.length;

    let count  = 0;
    for(let i = 0; i < n; i++) {
        let prod = 1;
        for(let j = i; j < n; j++) {
            prod *= nums[j]
            if(prod >= k) {
                break;
            }
            count++
        }
    }
    return count;
};
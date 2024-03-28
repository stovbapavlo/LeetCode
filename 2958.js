
const maxSubarrayLength = function(nums, k) {
    let freq = {};
    let ans = 0, i = 0, j = 1;
    freq[nums[0]] = 1; ans = 1;
    while(i<=j && j<nums.length){
        let r = nums[j];
        freq[r] = (freq[r] || 0) + 1;
        if(freq[r]>k){
            while(freq[r]>k && i<j){
                freq[nums[i]] = freq[nums[i]] - 1;
                i++;
            }
        }
        ans = Math.max(ans,j-i+1);
        j++;
    }
    return ans;
};
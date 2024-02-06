
nums = [1, 3, 3, 2]
nums.sort((a, b) => a - b)
let n = nums.length, v = 1;
if(nums[n - 1] !== nums[n - 2]) return false
for(let i = 0; i < n - 1; i++){
    if(nums[i] !== v++) return false;
}
return true
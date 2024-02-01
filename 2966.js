let nums = [1,3,4,8,7,9,3,5,1], k = 2

let res = []

nums.sort((a, b) => a - b);

console.log(nums);

for (let i = 2; i < nums.length; i = i + 3) {
    if((nums[i -1] - nums[i - 2] > k) || (nums[i] - nums[i - 1] > k) || (nums[i] - nums[i - 2] > k)) {
        return [];
    }
    else {
        res.push([nums[i - 2], nums[i - 1], nums[i]])
    }
}
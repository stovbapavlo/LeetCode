let nums = [1,2,4], k = 5;

nums.sort((a,b) => a - b);
let l = 0, r = 0;
let res = 0, total = 0;

for(l = 0; l < nums.length; l++){
    total += nums[l];
    while(nums[l]*(l - r + 1) > total + k){
        total -= nums[l];
        l += 1;

        res = Math.max(res, r - l + 1);
        r += 1;
    }
}
console.log(res);
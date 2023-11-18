let nums = [1,4,8,13], k = 5;

nums.sort((a,b) => a - b);

let i = 0, j = 0;
let res = 0, total = 0;

for(i = 0; i < nums.length; i++){
    res += nums[i];

    while((i - j + 1) * nums[i]- res > k){
        res -= nums[j];
        j++;

    }
    total = Math.max(total, i - j + 1);
}
console.log(total);
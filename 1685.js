let nums = [1,4,6,8,10];

let n = nums.length

let result = [];

let sum = 0;
let j = 0;

for(let i = 0; i < n; i++){
    while(j !== n){
        sum += Math.abs(nums[i] - nums[j]);
        console.log(sum);
        j++;
    }
    result.push(sum);
    sum = 0;
    j = 0;
}
console.log(result);
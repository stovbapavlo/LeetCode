const nums = [2,7,9,3,1];

let sum1 = 0, sum2 = 0;


for(let i = 0; i < nums.length; i++) {
    if(i % 2 === 0 || i === 0) {
        sum1 += nums[i];
    }
    else {
        sum2 += nums[i];
    }
}




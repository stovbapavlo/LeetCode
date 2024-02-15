/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b)
    let sum = 0;
    let max = -1;
    for(let i = 0; i < nums.length; i++){
        if(i >= 2 && sum > nums[i]){
            max = sum + nums[i];
        }
        sum += nums[i]
    }

    return max
};


/* while(nums.length > 2) {
        const largest = nums.pop();
        const sum = nums.reduce((acc, curr) => acc + curr, 0);

        if (largest < sum) {
            return sum + largest;
        }
    }

    return -1;*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]){
            return nums[i]
        }
    }
};


/*for (let num of nums) {
        let index = Math.abs(num);
        nums[index] *= -1;
        if (nums[index] >= 0) {
            return Math.abs(num);
        }
    }*/
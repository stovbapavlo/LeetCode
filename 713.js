/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0;

    let i=0, count =0, prod=1

    for(let j=0; j < nums.length; j++){

        prod *= nums[j];

        while(prod >= k && i <= j){
            prod /= nums[i];
            i++;
        }

        count += j-i+1;
    }

    return count;
};
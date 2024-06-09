/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let freq = new Array(k).fill(0)
    let sum = 0 , count =0
    freq[0] = 1
    for(const num of nums)
    {
        sum = (sum+num%k+k)%k
        count+=freq[sum]
        freq[sum]++
    }
    return count
};
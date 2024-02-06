/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const base = nums.sort((a,b)=>b-a);
    if((base[0]+1)!==nums.length || base[0]!==base[1]){
        return false
    }
    for(let i=1;i<nums.length;i++){
        if(!base.includes(i)){
            return false
        }
    }
    return true
};
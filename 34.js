var searchRange = function(nums, target) {
    let lo = 0, hi = nums.length;
    while(lo < hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        if (target > nums[mid]) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }
    let res = [];
    res.push(lo);
    if(nums[lo] !== target){
        return [-1,-1];
    }
    while(nums[lo] === target){
        lo++;
    }
    res.push(lo-1);
    return res;
}
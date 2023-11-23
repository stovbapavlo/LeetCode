/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */

var checkArithmeticSubarrays = function(nums, l, r) {
    function check(arr){
        arr.sort((a,b)=> a - b);
        let diff = arr[1] - arr[0];

        for(let i = 2; i < arr.length; i++){
            if(arr[i] - arr[i - 1] !== diff){
                return false;
            }
        }
        return true;
    }

    const ans = [];

    for(let i = 0; i < l.length; i++){
        const arr = nums.slice(l[i], r [i] + 1);
        ans.push(check(arr));
    }

    return ans;

};

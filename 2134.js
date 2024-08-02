/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let total = 0;
    nums.forEach(num=>{
        total+=num;
    })
    let minSwaps = total
    let swaps = total
    let initArray = nums.slice(0, total);
    let initNumsLength = nums.length;
    initArray.forEach(val=>{swaps-=val})
    let extendedArray = nums.concat(initArray)
    nums.forEach((num, index)=>{

        swaps -= (extendedArray[index+total]- num);
        if(minSwaps > swaps ){minSwaps = swaps}

    })
    return minSwaps
};
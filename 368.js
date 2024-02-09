
function largestDivisible(nums){
    if(nums.length === 0){
        return [];
    }

    nums.sort((a, b) => a - b);

    let subsets = [[nums[0]]];
    let maxSubsetIndex = 0;

    for(let i = 1; i < nums.length; i++) {
        let subsetFound = false;

        for(let j = 0; j < subsets.length; j++) {
            if(nums[i] % subsets[j][0] === 0) {
                subsets[j].unshift(nums[i]);
                subsetFound = true;
                break;
            }
        }
        if(!subsetFound){
            subsets.push([nums[i]])
        }
        if(subsets[subsets.length - 1].length > subsets[maxSubsetIndex].length) {
            maxSubsetIndex = subsets.length - 1;
        }
    }
    return subsets[maxSubsetIndex];
}
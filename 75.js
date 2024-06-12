let nums = [2,0,2,1,1,0];

let temp, smallest;

for(let i = 0; i < nums.length - 1; i++){

    smallest = i
    for(let j = i + 1; j < nums.length; j++) {
        if(nums[j] < nums[smallest]){
            smallest = j;
        }
    }
    temp = nums[smallest];
    nums[smallest] = nums[i];
    nums[i] = temp;
}

console.log(nums)
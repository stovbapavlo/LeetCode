let nums = [10,9,2,5,3,7,101,18]
let res = 0;
let min = nums[0]
for(let i = 0; i < nums.length; i++){
    if(min > nums[i]){
        min = nums[i]
    }
    console.log(`min value ${min},\n itat${i}`)

    if(min <= nums[i + 1]){
        res++
    }
    else if(num){

    }
    console.log(`res${res}, ${i}`)
}
console.log(res);
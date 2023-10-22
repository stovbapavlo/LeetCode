/*
let arr = [2,7,11,15];

let targer = 9;

let newArr = [];

for(i = 0; i < arr.length -1; i++)
{
    for (j = i + 1; j < arr.length; j++)
    {
        if(arr[i] + arr[j] === targer){
            newArr.push(i);

            newArr.push(j);

        }
    }
}
console.log(newArr);
console.log();*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let newArr = [];

    for(let i = 0; i < nums.length -1; i++)
    {
        for (let j = i + 1; j < nums.length; j++)
        {
            if(nums[i] + nums[j] === target)
            {

                newArr.push(i);

                newArr.push(j);

            }
        }
    }
    return newArr;
};


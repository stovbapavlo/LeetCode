let arr = [1,2,3,4,5,6,7,8,9]
let size = 2;

let result = [];

for(let i = 0; i < arr.length; i+= size)
{
    result.push(arr.slice(i, i + size));
}

console.log(result);
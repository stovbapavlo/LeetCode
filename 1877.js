let arr = [3,5,4,2,4,6];

arr.sort();

let res = [];

for(let i = 0;i < arr.length / 2;  i++ )
{
    res += arr[i] + arr[arr.length - 1 - i]
}


console.log(Math.max(...res));


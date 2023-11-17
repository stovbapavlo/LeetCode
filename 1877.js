let arr = [9,2,10,1,10,4,8,9,7,6,8,10,8,6,5,4,3,4,2,10];

arr.sort((a, b)=> a - b);

let res = [];

for(let i = 0;i < arr.length / 2;  i++ )
{
    res.push(arr[i] + arr[arr.length - 1 - i]);
}


console.log(Math.max(...res));


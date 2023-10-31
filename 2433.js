let arr = [5 , 2 , 0 , 3 , 1]

let newArr = [arr[0]];


for (let i = 1; i < arr.length; i++) {


    newArr.push(arr[i]^arr[i - 1]);

}
console.log(newArr);
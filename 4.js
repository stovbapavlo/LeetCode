let num1 = []
let num2 = [2, 3]


let result= 0
let arr = num1.concat(num2);
arr.sort();
console.log(arr);

if(arr.length === 1) {
    result = arr;
}
else {
    if(arr.length === 2){
        middleIndex = 1;
        result = (arr[middleIndex] + (arr[middleIndex - 1])) / 2
    }
    else{

        const middleIndex = Math.floor(arr.length / 2);

        console.log(`middle ${middleIndex}`)
        if (middleIndex % 2 === 0) {
            console.log(`arr 1 = ${arr[middleIndex]}`);
            console.log(`arr 2 = ${arr[middleIndex - 1]}`);
            result = (arr[middleIndex] + (arr[middleIndex - 1])) / 2
        } else {
            result = arr[middleIndex];
        }
    }
}






console.log(`result = ${result}`);
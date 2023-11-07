let digit = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

let digitNumber = BigInt(digit.join(''));

console.log(digitNumber.toString());


digitNumber ++;

console.log(digitNumber.toString());


let newArr = digitNumber.toString().split('').map(Number);

console.log(newArr);

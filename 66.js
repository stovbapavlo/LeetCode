let digit = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

let digitNumber = BigInt(digit.join(''));

console.log(digitNumber.toString());

// Додаємо 1 до BigInt числа
digitNumber ++;

console.log(digitNumber.toString());

// Перетворюємо BigInt число в масив чисел
let newArr = digitNumber.toString().split('').map(Number);

console.log(newArr);

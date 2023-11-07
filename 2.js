let l1 =[2,4,3]
let l2 = [5,6,4]

let result = (parseInt(l1.join('')) + parseInt(l2.join(''))).toString().trim().split('').map(Number);

let reverse = result.reverse();


console.log(reverse);
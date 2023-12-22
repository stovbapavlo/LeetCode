let s = "011101";

let res = 0;
let right = s.split("1").length - 1;
let left = 0;

for(let i = 0; i < s.length; i++){
    left += s[i] === '0'? 1 : 0;
    right -= s[i] === '1'? 1 : 0;

    res = Math.max(res, left + right);



}


console.log(res);
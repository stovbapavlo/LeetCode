let num = "52";
let l = num.length;
let res = '';


for(let i = l - 1; i > 0; i--){
    if(num[i] % 2 === 1) {
        res = num.slice(0, num[i]);
        console.log(res);
    }
}



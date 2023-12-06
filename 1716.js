let n  = 10;

let res1 = 0;
let res = 1;


while(n > 0){
    for(let i = 0; i < Math.min(7, n); i++){
        res1 += res + i;
    }
    //console.log(n);
    n-= 7;
    res++;
}
console.log(res1);
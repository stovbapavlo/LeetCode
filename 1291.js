const low = 100, high = 300;

let res = [];

for(let  i = 1; i <=9; i++){
    let num = i;
    for(let j = i + 1; j <=9; j++){
        num = num * 10 + j;
        console.log(num);

        if(num >= low && num <= high){
            res.push(num);
        }
    }
}
console.log(res.sort((a, b) => a - b))

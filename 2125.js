let bank = ["011001","000000","010100","001000"];

let zeroCounter = 0;
let res = 0

for(let i = 0; i < bank.length - 1; i++){
    for(let j = 0; j < bank[0].length; j++){
        if (bank[i][j] === '1' && bank[i + 1][j] === '1'){
            for(let k = i + 1; k < bank.length; k++){
                if(bank[k][j] === "1"){
                    res++;
                }
            }
        }
    }
}
console.log(res)

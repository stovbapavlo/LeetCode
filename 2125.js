/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let zeroCounter = 0;
    let res = 0

    for(let i = 0; i < bank.length; i++){
        let count = 0;
        for(let j = 0; j < bank[i].length; j++){
            if(bank[i][j] === '1'){
                res += zeroCounter;
                count++;
            }
        }
        zeroCounter = count ? count: zeroCounter;
    }
    return res;
};
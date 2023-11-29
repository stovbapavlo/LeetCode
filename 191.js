/*
let n = 00000000000000000000001011;
let str = n.toString(2);

let counter = 0;

for(let item of str){
    if(item === '1'){
        counter++;
    }
}

console.log(counter);*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let str = n.toString(2);

    return str === '0' ? 0 : (str.match(/1/g)).length;



};

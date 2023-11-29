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


/*var hammingWeight = function(n) {
    let str = n.toString(2);

    return str === '0' ? 0 : (str.match(/1/g)).length;
};*/


var hammingWeight = function(n) {
    let counter = 0;

    while(n !== 0){
        const bit = n & 1;
        if(bit === 1) counter++;
        n >>>= 1;
    }
    return counter;



};

let nums = [2,2,1,1,1,5,5,2,5,2,5,5];

let hashMap = {};
let maxRepeat = 0;
let res;


for(let num of nums) {
    if(hashMap[num]) {
        hashMap[num]++
    }
    else {
        hashMap[num] = 1;
    }

    if(hashMap[num] > maxRepeat){
        maxRepeat = hashMap[num];
        res = num;
    }
}

console.log(res)
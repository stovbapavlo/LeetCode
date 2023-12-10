let nums = [1,1,1,2,2,3];

const freqMap = new Map();

const bucket = [];
const result = [];

for(let num of nums){
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
}
for(let[num, freq] of freqMap){
    bucket[freq] = (bucket[freq])
}
console.log(freqMap)
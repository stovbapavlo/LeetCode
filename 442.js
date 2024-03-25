let nums = [4,3,2,7,8,2,3,1];

const hash = {};
const duplicates = []


nums.forEach(num => {
    hash[num] = (hash[num] || 0) + 1;
})

duplicates.push(...Object.keys(hash).filter(key => hash[key] > 1).map(Number));


/*nums.forEach( num => {
    if(hash[num]) {
        hash[num]++
    }
    else {
        hash[num] = 1;
    }
})

for(const key in hash) {
    if(hash[key] > 1) {
        duplicates.push(parseInt(key))
    }
}*/

console.log(duplicates)
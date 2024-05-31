let nums = [1,2,1,3,2,5];

let hash = {}

for(const num of nums) {
    if (num in hash) {
        hash[num]++;
    }
    else {
        hash[num] = 1;
    }
}

const entries = Object.entries(hash)

const uniqueElements = entries.filter(([element, count]) => count === 1);
const uniqueValues = uniqueElements.map(([element, count]) => element);
console.log(uniqueValues);
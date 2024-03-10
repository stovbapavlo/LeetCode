let nums1 = [1,2,2,1], nums2 = [2,2]

const set1 = new Set(nums1)
const set2 = new Set(nums2)

let res = []

for(let value of set1) {
    if(set2.has(value)){
        res.push(value)
    }
}

console.log(res)
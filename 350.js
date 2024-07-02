let nums1 = [1,2,2,1], nums2 = [2,2]

let res = []


for(let i = 0; i < nums1.length; i++) {
    for(let j = 0; j < nums2.length - 1; j++) {
        if(nums1[i] === nums2[j]) {
            res.push(nums1[i]);


        }
    }
}

console.log(res)
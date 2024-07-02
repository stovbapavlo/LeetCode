/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let Map = {}
    let res = []

    for(let num of nums1){
        Map[num] = (Map[num] || 0) + 1
    }

    for(let num of nums2) {
        if(Map[num] > 0) {
            res.push(num)
            Map[num]--
        }
    }

    return res
};
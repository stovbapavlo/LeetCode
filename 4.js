/*
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let arr = nums1.concat(nums2).sort((a , b) => a - b);
    const n = arr.length;

    if(n % 2 === 0){
        const mid = n / 2;
        return((arr[mid] + (arr[mid - 1])) / 2)
    }
    else{
        const mid = Math.floor(n / 2);
        return arr[mid];

    }

};





let nums1 = [3, 2]
let nums2 = [-2, -1]


let arr = nums1.concat(nums2).sort((a , b) => a - b);
const n = arr.length;

console.log(arr);

if(n % 2 === 0){
    const mid = n / 2;
    console.log(`mid: ${mid}`)
    console.log(`length: ${n}`)
    console.log(((arr[mid] + (arr[mid - 1])) / 2));
}
else{
    const mid = n / 2;

    console.log(arr[mid]);

}*/

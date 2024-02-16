/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let x = new Map();
    arr.forEach(num => x.set(num, x.get(num) + 1 || 1));
    let presence = Array.from(x.values());
    presence.sort((a, b) => a - b);
    let res = presence.length;
    for (let num of presence) {
        if (k >= num) {
            k -= num;
            res--;
        } else return res;
    }
    return res;
};
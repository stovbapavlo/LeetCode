/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    arr.sort();
    const counts = arr.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1: 1;
        return acc;
    }, {});

    arr.sort((a, b) => counts[a] - counts[b]);
    return new Set(arr.slice(k)).size;
};
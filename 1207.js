/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};

    for(let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    const uniq = new Set(Object.values(map));

    return Object.values(map).length === uniq.size;
};
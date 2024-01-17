/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {}
    const seen = new Set()

    for (let num of arr) {
        map[num] = (map[num] || 0) + 1
    }

    for (let it in map) {
        if (seen.has(map[it])) {
            return false
        }
        seen.add(map[it])
    }

    return true
};
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    arr1 = arr1.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b))
    s = new Set(arr2)
    let end = []
    while (!s.has(arr1[0])) {
        end.push(arr1.shift())
    }
    end = end.sort((a, b) => a - b)
    return [...arr1, ...end]

};
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let n = names.length;
    let map = {}

    for (let i = 0; i < n; ++i) {
        map[heights[i]] = names[i]
    }

    heights.sort((a, b) => b - a);

    for (let i = 0; i < n; ++i) {
        names[i] = map[heights[i]]
    }

    return names
};
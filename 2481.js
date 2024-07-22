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

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) =>
    names
        .map((c, i) => [c, heights[i]])
        .sort((a, b) => b[1] - a[1])
        .map((c) => c[0]);
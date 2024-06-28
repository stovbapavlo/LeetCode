/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    let count = new Array(n).fill(0);
    let result = 0;
    for (let road of roads) {
        ++count[road[0]];
        ++count[road[1]];
    }

    count.sort((a,b) => a - b);

    for (let i = n - 1; i >= 0; --i) {
        result += count[i] * (n--);
    }
    return result;
};
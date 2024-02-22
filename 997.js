/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const counts = new Array(n+1).fill(0)

    for (let [a, b] of trust) {
        counts[a] -= 1, counts[b] += 1
    }

    for (let i = 1; i < counts.length; i++) {
        if (counts[i] === n-1) return i
    }
    return -1
};
/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    const [m, n] = [rowSum.length, colSum.length];
    const res = Array.from({ length: m }, () => new Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const v = Math.min(rowSum[r], colSum[c]);
            res[r][c] = v;
            rowSum[r] -= v;
            colSum[c] -= v;
        }
    }
    return res;
};
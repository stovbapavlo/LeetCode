/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobs, d) {
    const n = jobs.length;
    if (n < d) return -1;
    const dp = [...new Array(n + 1)].map(() => new Array(d + 1).fill(Number.MAX_SAFE_INTEGER));
    dp[0][0] = 0;

    for (let i = 1; i <= n; ++i) {
        for (let k = 1; k <= d; ++k) {
            let max = 0;
            for (let j = i - 1; j >= k - 1; --j) {
                max = Math.max(max, jobs[j + 1 - 1]);
                dp[i][k] = Math.min(dp[j][k-1] + max, dp[i][k]);
            }
        }
    }
    return dp[n][d];
};
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    const mod = 10**9 + 7;

    let dp1 = new Array(target + 1).fill(0);
    let dp2 = new Array(target + 1).fill(0);

    dp1[0] = 1;

    for (let i = 1; i <= n; ++i) {
        let prev = dp1[0];
        for (let j = 1; j <= target; ++j) {
            dp2[j] = prev;
            prev = (prev + dp1[j]) % mod;


            if (j >= k) {
                prev = (prev - dp1[j - k] + mod) % mod;
            }
        }

        [dp1, dp2] = [dp2, dp1];

        dp2[0] = 0;
    }
    return dp1[target];

};
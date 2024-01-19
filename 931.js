/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n = matrix.length;

    const memo = [];

    for(let i = 0; i < n; i++) {
        memo.push(new Array(n).fill(null))
    }

    let ans = Infinity;

    for (let col = 0; col < n; col++) {
        ans = Math.min(ans, dp(n - 1, col));
    }

    return ans;

    function dp(row, col) {
        if (col < 0 || col >= n) {
            return Infinity;
        }

        if (row === 0) {
            return matrix[row][col];
        }

        if (memo[row][col] === null) {
            const curr = matrix[row][col];

            const middle = dp(row - 1, col);
            const left = dp(row - 1, col - 1);
            const right = dp(row - 1, col + 1);

            memo[row][col] = curr + Math.min(middle, left, right);
        }

        return memo[row][col];
    }
};

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n = grid.length - 1;
    const result = [];

    for (let i = 1; i < n; i++) {
        const row = [];
        for (let j = 1; j < n; j++) {
            row[j - 1] = Math.max(
                grid[i - 1][j - 1], grid[i - 1][j], grid[i - 1][j + 1],
                grid[i][j - 1], grid[i][j], grid[i][j + 1],
                grid[i + 1][j - 1], grid[i + 1][j], grid[i + 1][j + 1]
            );
        };
        result[i - 1] = row;
    };

    return result;
};
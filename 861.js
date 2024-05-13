/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length

    for (let i = 0; i < rows; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < cols; j++) {
                grid[i][j] = 1 - grid[i][j];
            }
        }
    }

    let score = 0;

    for (let j = 0; j < cols; j++) {
        let ones = 0;
        for (let i = 0; i < rows; i++) {
            ones += grid[i][j] ^ grid[i][0]
        }
        score += Math.max(ones, rows - ones) * (1 << (cols - 1 - j))
    }
    return score
};
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;

    function callDFS(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
            return;
        }

        grid[i][j] = '0';

        callDFS(grid, i + 1, j)
        callDFS(grid, i - 1, j)
        callDFS(grid, i, j + 1)
        callDFS(grid, i, j - 1)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count += 1;
                callDFS(grid, i, j);
            }
        }
    }

    return count;
};
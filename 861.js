var matrixScore = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] === 0 ) {
            for (let j = 0; j < grid[i].length; i++) {
                grid[i][j] = 1 - grid[i][j]
            }
        }
    }

    for (let j = 0; j < grid[0].length; j++) {
        let ones = 0;
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][j] === 1) ones += 1
        }
        if (ones < grid.length - ones) {
            for (let i = 0; i < grid.length; i++) {
                grid[i][j] = 1 - grid[i][j]
            }
        }
    }
    let ans = 0;
    grid.forEach(a => ans += parseInt(a.join(''), 2))

    return ans
};
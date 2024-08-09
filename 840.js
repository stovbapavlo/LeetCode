/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const isMagicSquare = (subgrid) => {
        const nums = new Set();
        let sum = 0;
        for (let i = 0; i < 3; i++) {
            sum += subgrid[i][0];
        }
        for (let i = 0; i < 3; i++) {
            if (new Set(subgrid[i]).size !== 3) return false;
            if (subgrid[i].reduce((a, b) => a + b) !== 15) return false;
            nums.add(subgrid[i][0]);
            nums.add(subgrid[i][1]);
            nums.add(subgrid[i][2]);
        }
        for (let i = 0; i < 3; i++) {
            let colSum = subgrid[0][i] + subgrid[1][i] + subgrid[2][i];
            if (colSum !== 15) return false;
        }
        if (subgrid[0][0] + subgrid[1][1] + subgrid[2][2] !== 15) return false;
        if (subgrid[0][2] + subgrid[1][1] + subgrid[2][0] !== 15) return false;
        return nums.size === 9 && Array.from(nums).every(num => num >= 1 && num <= 9);
    };

    let count = 0;
    for (let i = 0; i <= grid.length - 3; i++) {
        for (let j = 0; j <= grid[0].length - 3; j++) {
            const subgrid = [
                grid[i].slice(j, j + 3),
                grid[i + 1].slice(j, j + 3),
                grid[i + 2].slice(j, j + 3)
            ];
            if (isMagicSquare(subgrid)) count++;
        }
    }
    return count;
};
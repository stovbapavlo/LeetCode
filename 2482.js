let grid = [[0,1,1],[1,0,1],[0,0,1]];
let m = grid.length;
let n = grid[0].length;

const diff = Array.from({length: m}, () => Array(n).fill(0));

const oneRow = Array(m).fill(0);
//const zeroRow = Array(m).fill(0);
const oneCol = Array(n).fill(0);
//const zeroCol = Array(n).fill(0);

for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){

        oneRow[i] += grid[i][j];
        oneCol[j] += grid[i][j];
        //zeroRow[i] += 1 - grid[i][j];
        //zeroCol[j] += 1 - grid[i][j];
    }
}

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        diff[i][j] = 2 * (oneRow[i] + oneCol[j]) - m - n;
    }
}


const grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

let perimeter = 0;

for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
        if(grid[row][col] === 1) {
            if (row < grid.length - 1 && grid[row + 1][col] !== 1) perimeter++;
            if (row > 0 && grid[row - 1][col] !== 1) perimeter++;
            if (col < grid[0].length - 1 && grid[row][col + 1] !== 1) perimeter++;
            if (col > 0 && grid[row][col - 1] !== 1) perimeter++;
        }
    }
}
console.log(perimeter);


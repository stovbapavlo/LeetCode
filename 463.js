const grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

const rows = grid.length;
const cols = grid[0].length;

let perimeter = 0;

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        if (grid[row][col] === 1) {
            perimeter += 4;

            if (row > 0 && grid[row - 1][col] === 1) perimeter--;
            if (row < rows - 1 && grid[row + 1][col] === 1) perimeter--;
            if (col > 0 && grid[row][col - 1] === 1) perimeter--;
            if (col < cols - 1 && grid[row][col + 1] === 1) perimeter--;
        }
    }
}

console.log(perimeter);


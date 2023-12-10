const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const rows = matrix.length;
const cols = matrix[0].length;
const result = [];

for (let i = 0; i < cols; i++) {
    const column = [];
    for (const row of matrix) {
        column.push(row[i]);
    }
    result.push(column);
}

console.log(result);

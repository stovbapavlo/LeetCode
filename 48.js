f/*unction rotateMatrix(matrix){
    const n = matrix.length;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}
const matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
];

rotateMatrix(matrix);

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));

}*/

var rotate = function(matrix) {
    for(let i = 0; i < matrix.length; i += 1) {
        for(let j = i + 1; j < matrix.length; j += 1) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let row of matrix) {
        row.reverse();
    }
};


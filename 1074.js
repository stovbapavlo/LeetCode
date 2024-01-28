/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    let rows = matrix.length, cols = matrix[0].length;
    let count = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            matrix[row][col] += matrix[row][col - 1]
        }
    }

    for (let col1 = 0; col1 < cols; col1++) {
        for (let col2 = col1; col2 < cols; col2++) {
            let currSum = 0;
            let map = new Map();
            map.set(0,1)

            for (let row = 0; row < rows; row++) {
                currSum += matrix[row][col2] - (col1 > 0 ? matrix[row][col1 - 1] : 0)
                count += map.get(currSum - target) || 0
                map.set(currSum, map.get(currSum) + 1 || 1)
            }
        }
    }
    return count;
};
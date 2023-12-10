let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let n = matrix[1].length;
let res = [];
let arr = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        arr.push(matrix[j][i]);

    }
    res.push(arr);
    arr = [];


}


console.log(res);
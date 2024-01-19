const matrix = [[2,1,3],[6,5,4],[7,8,9]];

let sum = 0;

let indexMinEl = 0

for (let i = 0; i < matrix.length; i++) {
    let minNum =    Infinity;
    for (let j = 0; j < matrix[0].length; j++) {
        if(minNum > matrix[i][j]){
            minNum = matrix[i][j];
            indexMinEl = j;
        }
    }
    sum += minNum;
}

console.log(sum);
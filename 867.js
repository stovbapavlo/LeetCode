let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let n = 0;
let res = [];
let s = [];
let j = 0;
while(n < matrix[1].length){
    for (let i = 0; i < matrix[1].length; i++) {
    res.push(matrix[i][j])
        console.log(res);
}
    s.push(res);
    console.log(s);

    res = [];
    j++;
    n++;
}



console.log(s);
let matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];

let res = [[],[]];


for(let i = 0; i < matches.length; i++){
    let counter = 0;
    for(let j = i + 1; j < matches.length; j++){
        if(matches[i][0] === matches[j][1]){
            counter++
        }
    }
    if(counter === 0){
        res[[0]].push(matches[i][0])
    }
    else if( counter === 1){
        res[[1]].push(matches[i][0])
    }

}

console.log(res);
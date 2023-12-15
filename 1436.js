let paths =[["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]];


for(let i = paths.length - 1; i > 0; i--){
    console.log(i);
    if(paths[i][0] !== paths[i - 1][1]){
        console.log(paths[i - 1][1]);
    }

}
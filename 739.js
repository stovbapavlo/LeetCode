    const temperatures = [73,74,75,71,69,72,76,73];

    let res = [];
    let counter = 0;
    for(let i = 0; i < temperatures.length; i++){
        for(let j = i + 1; j < temperatures.length; j++){
            console.log(temperatures[j])
            if(temperatures[i] < temperatures[j]){
                counter++;
                res.push(counter);
                counter = 0;
                break;
            }
            else{
                counter++;
            }
        }
    }
    console.log(res);
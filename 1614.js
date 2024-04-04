const s = "(1+(2*3)+((8)/4))+1";

const maxDepth = function(s) {
    let counter = 0;
    let n = s.length;
    let maxCounter = 0;

    for(let i = 0; i < n; i++){
        if(s[i] === "(") {
            counter++
            maxCounter = Math.max(counter, maxCounter)
        }
        else if(s[i] === ")") counter--
    }
    return maxCounter
};


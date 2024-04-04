const s = "(1+(2*3)+((8)/4))+1";

let counter = 0;
let n = s.length;
let maxCounter = 0;

for(let i = 0; i < n; i++){
    if(s[i] === "(") counter++
    else if (counter > maxCounter) maxCounter = counter
    else if(s[i] === ")") counter--
}

console.log(maxCounter)

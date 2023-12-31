let s = "aa";
let substring = -1;
let res = -1;
for(let i = 0; i < s.length; i++){
    for(let j = i + 1; j < s.length; j++){
        if(s[i] === s[j]){
            let substring = s.slice(i + 1, j).length;
            console.log(substring);
        }
        if(res < substring){
            res = substring;
        }
    }
}

let s = "bab";
let t = "aba";

let setS = new Set(s);
let setT = new Set(t);
let sortS = s.split('').sort().join('');
let sortT = t.split('').sort().join('');

let counter = 0;

console.log(setS);
console.log(setT);

for(let i = 0; i < s.length; i++){
    if(sortT[i] !== sortS[i]){
        counter++;
    }
}

let s = 'aabaca';

const uniq = new Set(s);

let res = 0;
console.log(uniq);

for(const c of uniq){
    const start = s.indexOf(c);
    const end = s.lastIndexOf(c);

    if(start < end){
        res += new Set(s.slice(start + 1, end)).size;
        console.log(res);
    }

}






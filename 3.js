let s = "abcabcbb";


const seen = new Map();

let start = 0;

let maxLength = 0;


for (let i = 0; i < s.length; i++) {
    if(seen.has(s[i]))
        start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);

    maxLength = Math.max(i - start + 1, maxLength);
}

console.log(maxLength);

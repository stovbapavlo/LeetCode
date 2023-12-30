/*
let charMap = {}
words.forEach( e => {
    e.split('').forEach(el => {
        charMap[el] ? charMap[el] += 1 : charMap[el] = 1
    })
})

for(let count of Object.values(charMap)) {
    if(count % words.length !== 0) return false
}
return true

*/



/*var makeEqual = function(words) {
    const length = words.length;
    const charCount = new Map();
    for(const word of words){
        for(const char of word){
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    }
    for(const count of charCount.values()){
        if(count % length !== 0){
            return false;
        }
    }
    return true;
};*/

/*const length = words.length;
    const charCount = new Array(26).fill(0);

    for(const word of words){
        for(const char of word){
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
    }
    for(const count of charCount){
        if(count % length !== 0){
            return false;
        }
    }
    return true;*/
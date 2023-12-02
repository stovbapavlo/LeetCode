var countCharacters = function(words, chars) {
    const count = new Array(26).fill(0);

    for(const ch of chars){
        count[ch.charCodeAt(0)- 'a'.charCodeAt(0)]++;
    }

    let res = 0;

    for(const word of words){
        if(canForm(word, count)){
            res += word.length;
        }
    }
    return res;

    function canForm(word, counts) {
        const c = new Array(26).fill(0);

        for (const ch of word) {
            const x = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            c[x]++;
            if (c[x] > counts[x]) {
                return false;
            }
        }

        return true;
    }
};
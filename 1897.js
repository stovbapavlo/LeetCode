var makeEqual = function(words) {
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
};
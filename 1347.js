/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let hasMap = {};
    for(let letter of s){
        if(hasMap[letter]){
            hasMap[letter]++;
        }
        else{
            hasMap[letter] = 1;
        }
    }
    let changes = 0;
    for(let letter of t){
        if(hasMap[letter]){
            hasMap[letter] --;
        }
        else{
            changes++;
        }
    }
    return changes;

};
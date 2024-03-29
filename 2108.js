/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i++){
        if(isPalindromic(words[i])){
            return words[i]
        }
    }

    return ""

};
function isPalindromic(text) {
    let n = text.length;
    let revers = '';
    for(let i = n; i > 0; i--){
        revers += text[i - 1];
    }
    return text === revers
}
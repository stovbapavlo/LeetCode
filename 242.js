/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false;
    }

    let freq = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {
        freq[s.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
        freq[t.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    return freq.every(index => index === 0);
};
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let l = 0, r = s.length - 1;

    while(l < r && s[l] === s[r]) {
        let c = s[l]
        while(s[l] === c && l <= r) l++
        while(s[r] === c && l < r) r--
    }
    return r - l + 1
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let parts = s.trim().split(/\s+/);

    return parts[parts.length - 1].length;
};

///**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function(s) {
//     return s.trimEnd().split(' ').at(-1).length
// };
function isEquals(str1 , str2) {
    return str1 === str2;

}

function isUnique(str) {
    let set = new Set(str);
    return set.size === str.length;
}

function generateSubsequences(arr, current, index){
    if(index === arr.length) {

        if(isUnique(current) && current.length > maxLength) {
            maxLength = current.length
        }
        return maxLength;
    }
    generateSubsequences(arr, current, index + 1);

    generateSubsequences(arr, current+ arr[index], index + 1);

    return maxLength;
}
let arr = ["un","iq","ue"];


/*

/!**
 * @param {string[]} arr
 * @return {number}
 *!/
var maxLength = function(arr) {
    let res = 0;
    function solve(index, cur) {
        if(cur.length !== new Set(cur.split('')).size) {
            return;
        }
        res = Math.max(res, cur.length);
        for(let i = index; i < arr.length; i++) {
            solve(i + 1, `${cur}${arr[i]}`);
        }
    }
    solve(0, '');
    return res;
};*/

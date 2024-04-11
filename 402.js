/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stk = [] , rem = 0;
    for( let n of num ){
        while( stk.length && n < stk[stk.length - 1] && rem < k ){
            stk.pop();
            rem++;
        }
        stk.push(n);
    }
    while( rem < k ){
        stk.pop();
        rem++;
    }
    while( stk[0] === "0" ){
        stk.shift()
    }
    return stk.length ? stk.join('') : "0";
};
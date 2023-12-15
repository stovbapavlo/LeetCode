/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let y = x.toString().split("");
    let neg = false;
    if(y[0] == '-') {
        neg = true;
        y.shift()
    }
    let z = y.reverse()
    let q = Number(z.join(''))
    if(q > 0x7FFFFFFF) {
        return 0;
    }
    return Number(neg ? -q: q)
};
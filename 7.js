/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;

    let rev = 0;
    if (isNegative) { x = -x }

    while(x > 0){
        const remainder = x % 10;
        rev = rev * 10 + remainder;
        x = Math.floor(x / 10);
    }
    if(rev > Math.pow(2, 31)) {return 0}
    return isNegative? -rev : rev
};
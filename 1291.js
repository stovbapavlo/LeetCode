/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let result = [];
    let sample = '123456789';
    let n = 10;

    let lowLength = low.toString().length;
    let highLength = high.toString().length;

    for (let j = lowLength; j < highLength + 1; j++) {
        for (let i = 0; i < n - j; i++) {
            let num = parseInt(sample.substring(i, i + j));
            if (num >= low && num <= high) result.push(num);
        }
    }

    return result;
};
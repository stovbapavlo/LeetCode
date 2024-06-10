/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let num = 0;
    let copy = [...heights].sort((a,b) => a-b)
    for (let i=0; i<heights.length; i++) {
        if (copy[i] != heights[i]) {
            num++
        }
    }


    return num;
};
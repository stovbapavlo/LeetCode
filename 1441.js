/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = [];
    let current = 1;

    for(let i = 0; i < target.length; i++)
    {
        while(current < target[i]){
            result.push("Push");
            result.push("Pop");
            current++;
        }
        result.push("Push");
        current++;

    }
    return result;

};
/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    const pairs = new Map();

    for(const val of adjacentPairs){
        if(!pairs.has(val[0])) pairs.set(val[0], []);
        if(!pairs.has(val[1])) pairs.set(val[1], []);
        pairs.get(val[0]).push(val[1]);
        pairs.get(val[1]).push(val[0]);
    }

    const result = [];
    let start = null;

    for (const [entry, values] of pairs) {
        if (values.length === 1) {
            start = entry;
            break;
        }
    }

    let left = null;
    result.push(start);

    for (let i = 1; i <= adjacentPairs.length; i++) {
        const val = pairs.get(start);
        const newval = val[0] !== left ? val[0] : val[1];
        result.push(newval);
        left = start;
        start = newval;
    }

    return result;
};
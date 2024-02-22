/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trustReceived = new Array(n + 1).fill(0);
    const trustGiven = new Array(n + 1).fill(0);

    for(const [a, b] of trust) {
        trustReceived[b]++;
        trustGiven[a]++;
    }

    for(let person = 1; person <= n; person++) {
        if (trustReceived[person] === n - 1 && trustGiven[person] === 0) {
            return person;
        }
    }

    return -1;
};
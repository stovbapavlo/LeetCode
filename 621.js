/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freqMap = new Map();
    for(let char of tasks) {
        freqMap.set(char, (freqMap.get(char) ?? 0) + 1)
    }

    const countList = Array.from(freqMap.values()).sort((a, b) => b - a);
    const maxCount = countList[0]
    let idleCount = (maxCount - 1) * n

    for(let i = 1; i < countList.length; i++) {
        idleCount -= Math.min(maxCount - 1, countList[i]);
    }

    return Math.max(0, idleCount) + tasks.length;
};
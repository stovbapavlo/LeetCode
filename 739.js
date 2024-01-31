/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    let stack = [];
    let answer = [];

    for (let i = 0; i < temps.length; i++) {
        answer[i] = 0;
        while (stack.length !== 0 && temps[stack[stack.length - 1]] < temps[i]) {
            const oldIdx = stack.pop();
            const oldVal = temps[oldIdx];
            answer[oldIdx] = i - oldIdx;
        }

        stack.push(i);
    }
    return answer;
};
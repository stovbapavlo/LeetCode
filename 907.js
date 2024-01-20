/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const stack = [0]
    arr.splice(0, 0, -Infinity)
    arr.push(-Infinity)
    let res = 0

    for (let i = 1; i < arr.length; i++) {
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
            const mid = stack.pop()
            const left = mid - stack[stack.length - 1]
            const right = i - mid
            res += left * right * arr[mid]
        }

        stack.push(i)
    }

    return res % (10 ** 9 + 7)
};
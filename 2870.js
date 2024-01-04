/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const counts = new Map();

    for (const num of nums) {
        const current = counts.get(num) ?? 0;
        counts.set(num, current + 1);
    }
    a
    let result = 0;

    for (const [key, count] of counts) {
        if (count === 1) return -1;
        if (count % 3 === 0) result += count / 3;
        else {
            const threes = Math.floor((count - 2) / 3);
            const twos = (count - (threes * 3)) / 2;
            result += threes + twos;
        }
    }

    return result;
};



/*
/!**
 * @param {number[]} nums
 * @return {number}
 *!/
var minOperations = function(nums) {
    nums.sort((a, b) => a - b);

    let counter = 1;
    let res = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            counter++;
        } else {
            if (counter <= 1) {
                return -1;
            }

            while (counter !== 0) {
                if (counter % 3 === 0) {
                    res += counter / 3;
                    counter = 0;
                } else if (counter % 3 === 1) {
                    res += Math.floor(counter / 3) + 1;
                    counter = 0;
                } else if (counter % 3 === 2) {
                    res += Math.floor(counter / 3) + 1;
                    counter = 0;
                }
            }

            counter = 1;
        }
    }
    if (counter <= 1) {
        return -1;
    } else {
        if (counter % 3 === 0) {
            res += counter / 3;
        } else {
            res += Math.floor(counter / 3) + 1;
        }
    }

    return res;
};
*/

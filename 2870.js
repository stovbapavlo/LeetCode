/**
 * @param {number[]} nums
 * @return {number}
 */
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

findMaxLength = function(nums) {
    const map = new Map();
    map.set(0, -1);
    let curr = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        curr += nums[i] === 1 ? 1 : -1;
        if (map.has(curr))
            result = Math.max(result, i - map.get(curr));
        else
            map.set(curr, i);
    }

    return result;
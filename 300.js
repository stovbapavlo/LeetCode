/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const sequence = [];

    for(const num of nums){
        if(num > sequence[sequence.length - 1]){
            sequence.push(num);
            continue;
        }

        const binarySearch = (sequence, num) => {
            let left = 0;
            let right = sequence.length - 1;
            while(left <= right){
                const midIndex = Math.floor((left + right) / 2);
                const guess = sequence[midIndex];

                if(num === guess) return midIndex;
                if(num > guess) left = midIndex + 1;
                if(num < guess) right = midIndex - 1;
            }

            return left;
        }

        const index = binarySearch(sequence, num)

        sequence[index] = num;
    }

    return sequence.length;
};

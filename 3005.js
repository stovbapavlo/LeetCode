/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let frequenciesMap = {}

    let maxFrequencies = 0;

    for(let num of nums) {
        frequenciesMap[num] = (frequenciesMap[num] || 0) + 1
        maxFrequencies = Math.max(maxFrequencies, frequenciesMap[num])
    }

    let countMaxFrequency = 0;
    for(let num in frequenciesMap) {
        if(frequenciesMap[num] === maxFrequencies) {
            countMaxFrequency++;
        }
    }
    return countMaxFrequency;
};
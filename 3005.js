/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let frequenciesMap = new Map()

    for(let num of nums) {
        frequenciesMap.set(num, (frequenciesMap.get(num) || 0) + 1)

    }
    const maxFrequency = Math.max(...frequenciesMap.values())

    const maxFreqElement = [...frequenciesMap.keys()].filter(num => frequenciesMap.get(num) === maxFrequency)
    let countMaxFrequency = maxFrequency * maxFreqElement.length;

    return countMaxFrequency;
};
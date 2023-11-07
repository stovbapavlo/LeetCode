/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    const n = dist.length;
    let killCounter = 0;

    const time = new Array(n)
    for(let i = 0; i < n; i++)
    {
        time[i] = dist[i] / speed[i];
    }

    time.sort((a, b) => a - b);

    for(let i = 0; i < n; i++){
        if (time[i] > i)
        {
            killCounter++;
        }
        else
        {
            break;
        }
    }
    return killCounter;
};
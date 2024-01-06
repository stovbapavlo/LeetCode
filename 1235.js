/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const jobs = [];
    for (let i = 0; i < startTime.length; i++){
        jobs.push({ startTime: startTime[i], endTime: endTime[i], profit: profit[i]})
    }

    //sort jobs on thier end times in ascending order
    jobs.sort((a, b) => a.endTime - b.endTime)

    // helper function to find the latest job that finishes before the passed time
    const findLatestNonOverlappingJob = (jobIndex) => {
        let low = 0,
            high = jobIndex - 1;

        while (low <= high) {
            let mid = Math.floor((low + high)/2);

            if(jobs[mid].endTime <= jobs[jobIndex].startTime){
                if(jobs[mid + 1].endTime <= jobs[jobIndex].startTime) {
                    low = mid + 1;
                }else {
                    return mid;
                }
            }else {
                high = mid - 1;
            }
        }
        return -1;
    }
    const n = jobs.length;
    const dp = new Array(n);
    dp[0] = jobs[0].profit;

    for (let i = 1; i < n; i++) {
        let includingCurrentJob = jobs[i].profit;

        let latestNonOverlappingJobIndex = findLatestNonOverlappingJob(i);

        if(latestNonOverlappingJobIndex !== -1) {
            includingCurrentJob += dp[latestNonOverlappingJobIndex];
        }

        const excludingCurrentJob = dp[i - 1];
        dp[i] = Math.max(includingCurrentJob, excludingCurrentJob)
    }
    return dp[n - 1]
};



/*
var jobScheduling = function(startTime, endTime, profit) {
    let jobs = [];
    let n = startTime.length;
    for (let i = 0; i < n; i++) {
        jobs.push({s: startTime[i], e: endTime[i], p: profit[i]});
    }
    jobs.sort(function(x,y) {return x.e - y.e});

    let dp = new Array(n);
    dp[0] = jobs[0].p;

    for(let i = 1; i < n; i++){
        let profit = jobs[i].p;
        let task = -1;
        for(let j = i -1; j >= 0; j--){
            if(jobs[j].e <= jobs[i].s){
                task = j;
                break;
            }
        }
        if(task != -1){
            profit  += dp[task];
        }
        dp[i] = Math.max(profit, dp[i - 1]);

    }
    return dp[n - 1];
};*/

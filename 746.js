/*let cost = [1,100,1,1,1,100,1,1,100,1]


let counter = 0;
let right = cost.length - 1;

do{

    if(cost[right - 1] === undefined)
    {
        break;
    }
    if(cost[right] === cost[right - 1])
    {
        counter += cost[right - 1];
        right = right - 2;
    }
    else if(cost[right] > cost[right - 1])
    {


        counter += cost[right - 1];
        right = right - 2;
    }
    else
    {

        counter += cost[right];
        right--;

    }
}while(right >= 0);
console.log(counter);*/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    let n = cost.length;

    if(n <= 1)
    {
        return 0;
    }

    let dp = new Array(n);

    dp[0] = cost[0];
    dp[1] = cost[1];

    for(let i = 2; i < n; i++)
    {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i -2]);
    }


    return Math.min(dp[n -1], dp[n - 2]);

};



/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    /* const dp = [0];

     for(let i = 1; i <= n; i++){
         dp[i] = Number.MAX_VALUE;
         for(let j = 1; j * j <= i; j++){
             dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
         }
     }
     return dp[n]*/

    if (Math.sqrt(n) % 1 === 0) {
        return 1;
    }

    for(let squareRootFirst = 1; squareRootFirst * squareRootFirst <= n; squareRootFirst++){
        let squareRootSecond = Math.sqrt(n - squareRootFirst * squareRootFirst);
        if(squareRootSecond % 1 === 0) {
            return 2;
        }
    }

    while(n % 4 === 0) {
        n /= 4;
    }
    if(n % 8 === 7) {
        return 4;
    }

    return 3;

};
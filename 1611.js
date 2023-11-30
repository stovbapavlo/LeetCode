
/*
var minimumOneBitOperations = function(n) {
    let answer = 0;
    let op = 1;
    let bits = 30;
    while(bits >= 0){
        if(n & (1 << bits)){
            let tmp = (1 << (bits + 1)) - 1;
            answer += tmp * op;
            op *= -1;
        }
        bits--;
    }
    return answer;
};*/

let dp = { 0: 0 };
var minimumOneBitOperations = function(n) {
    if (!(n in dp)) {
        let b = 1;
        while ((b << 1) <= n) {
            b = b << 1;
        }
        dp[n] = minimumOneBitOperations((b >> 1) ^ b ^ n) + 1 + b - 1;
    }
    return dp[n];
};

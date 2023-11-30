var minimumOneBitOperations = function(n) {
    let answer = 0;
    let op = 1;

    for (let bits = 30; bits >= 0; bits--) {
        if (n & (1 << bits)) {
            answer += ((1 << (bits + 1)) - 1) * op;
            op *= -1;
        }
    }

    return answer;
};
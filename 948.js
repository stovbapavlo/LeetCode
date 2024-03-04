var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b)

    let score = 0;
    let resPower = power;

    while (tokens.length !== 0) {
        const flipLeft = resPower - tokens[0];

        if (tokens.length === 1 && flipLeft < 0) break;

        if (flipLeft >= 0) {
            resPower = flipLeft;
            score++;
            tokens.shift();
        }
        else if (score >= 1) {
            resPower += tokens.pop();
            score--;
        }
        else break;
    }
    return score
};


/*
* let score = 0;
    let resPower = power;
    const n = tokens.length;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        if (resPower >= tokens[left]) {
            resPower -= tokens[left];
            left++;
            score++;
        } else if (score > 0) {
            resPower += tokens[right];
            right--;
            score--;
        } else {
            break;
        }
    }

    return score;*/
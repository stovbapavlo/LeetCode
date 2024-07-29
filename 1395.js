const numTeams = rating => {
    let ans = 0;

    for (let middle = 1; middle < rating.length - 1; middle++) {
        let descLeft = 0;
        let descRight = 0;
        let ascLeft = 0;
        let ascRight = 0;

        for (let left = 0; left < middle; left++) {
            if (rating[left] > rating[middle]) descLeft++;
            else ascLeft++;
        }

        for (let right = middle + 1; right < rating.length; right++) {
            if (rating[middle] > rating[right]) descRight++;
            else ascRight++;
        }

        ans += descLeft * descRight + ascLeft * ascRight;
    }

    return ans;
};
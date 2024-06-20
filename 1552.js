/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position = position.sort((a,b) => a - b);

    let start = 0;
    let end = position[position.length - 1];

    if(m === 2) return end - position[0]

    let result = -1

    while(start <= end) {

        let basketsApart = Math.floor((start + end) / 2)

        if (canPlaceAllBalls(position, m, basketsApart)) {

            result = basketsApart;

            start = basketsApart + 1
        }
        else {
            end = basketsApart - 1
        }
    }
    return result
};

const canPlaceAllBalls = (baskets, ballCount, guess) => {

    let prev = 0;

    let ballsPlaced = 1;

    for (let i = 1; i < baskets.length; i++) {

        let distanceBetweenBalls = baskets[i] - baskets[prev];
        if (distanceBetweenBalls >= guess){
            ballsPlaced += 1;
            prev = i;

            if (ballsPlaced === ballCount) return true
        }
    }

    return false;
}
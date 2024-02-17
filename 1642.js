/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var  furthestBuilding = function(heights, bricks, ladders) {
    let ans = 0;
    let ladderHeap = new PriorityQueue({
        compare: (a, b) => {
            return a.height - b.height;
        }
    })

    for(let i = 1; i < heights.length; i++) {
        if(heights[i] <= heights[i-1]) ans++;
        else {
            const height = heights[i] - heights[i-1];
            if(ladders > 0) {
                ladderHeap.enqueue({
                    i,
                    height
                });
                ladders--;
                ans++;
            } else if(bricks > 0) {
                const currentLadder = ladderHeap.front();
                if(currentLadder && height > currentLadder.height) {
                    if(bricks >= currentLadder.height) {
                        ladderHeap.dequeue();
                        bricks -= currentLadder.height;
                        ans++;
                        ladderHeap.enqueue({
                            i,
                            height
                        })
                    }
                    else return ans;
                } else {
                    bricks -= height;
                    if(bricks < 0) return ans;
                    ans++;
                }
            } else return ans;
        }
    }
    return ans;
};
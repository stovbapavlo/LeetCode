const heap = new MaxPriorityQueue({priority: x => x});
let i;

for(i = 0; i < heights.length; i++){
    if(heights[i] >= heights[i + 1]) continue;

    const diff = heights[i + 1] - heights[i];

    if(diff > bricks) {
        if(ladders === 0) break;

        if(!heap.isEmpty() && heap.front().element > diff) {
            bricks += heap.dequeue().element - diff;
            heap.enqueue(diff)
        }
        ladders--;
    } else{
        bricks -= diff;
        heap.enqueue(diff);
    }
}
return iconst heap = new MaxPriorityQueue({priority: x => x});
let i;

for(i = 0; i < heights.length; i++){
    if(heights[i] >= heights[i + 1]) continue;

    const diff = heights[i + 1] - heights[i];

    if(diff > bricks) {
        if(ladders === 0) break;

        if(!heap.isEmpty() && heap.front().element > diff) {
            bricks += heap.dequeue().element - diff;
            heap.enqueue(diff)
        }
        ladders--;
    } else{
        bricks -= diff;
        heap.enqueue(diff);
    }
}
return i
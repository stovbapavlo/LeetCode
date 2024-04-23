/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]
    const adjList = new Array(n).fill(0).map(() => [])
    const degrees = new Array(n).fill(0)
    for (const [a, b] of edges) {
        adjList[a].push(b)
        adjList[b].push(a)
        degrees[a]++
        degrees[b]++
    }

    let leaves = []
    for (let i = 0; i < n; i++) {
        if (degrees[i] === 1) leaves.push(i)
    }

    while (n > 2) {
        n -= leaves.length
        let newLeaves = []
        for (let i of leaves) {
            for (let j of adjList[i]) {
                degrees[j]--
                if (degrees[j] === 1) newLeaves.push(j)
            }
        }
        leaves = newLeaves
    }

    return leaves
};

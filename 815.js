/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {

    console.log(process.memoryUsage())
    if (source == target) return 0
    let graph = routes.map(x => []), sets = routes.map(x => new Set(x))
        , sourceIndex = routes.length, targetIndex = routes.length + 1
    graph[sourceIndex] = [], graph[targetIndex] = []
    for (let i = 0; i < routes.length; i++) {
        for (let j = i + 1; j < routes.length; j++) {
            if (hasJolt(routes[i], sets[j])) {
                graph[i].push(j)
                graph[j].push(i)
            }
        }
        if (sets[i].has(source)) graph[sourceIndex].push(i)
        if (sets[i].has(target)) {
            graph[i].push(targetIndex)
        }
    }

    return bfs(sourceIndex, targetIndex)

    function bfs(source, target) {
        let visited = routes.map(x => false), queue = [[source, 0]]
        visited[source] = true

        while (queue.length) {
            let [cur, buses] = queue.shift()
            if (!graph[cur]) debugger
            for (let i of graph[cur]) {
                if (!graph[cur].includes(i) || visited[i]) continue
                if (i == target) {
                    console.log(process.memoryUsage())
                    return buses
                }
                queue.push([i, buses + 1])
                visited[i] = true
            }
        }
        return -1
    }

    function hasJolt(r1 = [], r2 = new Set) {
        let set = r2
        for (let x of r1) {
            if (set.has(x)) return true
        }
        return false
    }
};

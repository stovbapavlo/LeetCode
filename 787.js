/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let M = Array.from({ length: n + 1 }, () => Infinity);
    M[src] = 0;
    for (let i = 0; i < k + 1; i++) {
        let N = [...M]
        for (let [from, to, price] of flights) {
            N[to] = Math.min(N[to], M[from] + price);
        }
        M = N
    }
    return M[dst] != Infinity ? M[dst] : -1
}
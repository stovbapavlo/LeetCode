let M = Array.from({ length: n + 1 }, () => Infinity);
M[src] = 0;
for (let k = 0; k < ka + 1; k++) {
    let N = [...M]
    for (let [from, to, price] of flights) {
        N[to] = Math.min(N[to], M[from] + price);
    }
    M = N
}
return M[dst] != Infinity ? M[dst] : -1
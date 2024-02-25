/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function(nums) {
    if (nums.length == 1)
        return true
    if (nums.includes(1))
        return false
    G = new Map
    nums = Array.from(new Set(nums))
    for (let num of nums) {
        let factors = []
        let factor = 2
        let p = 1
        while (factor * factor <= num) {
            if (num % factor == 0) {
                factors.push(factor)
                while (num % factor == 0)
                    num /= factor
            }
            factor += p
            p = 2
        }
        if (num > 1)
            factors.push(num)
        for (let i = 0; i < factors.length; i++) {
            if (!G.has(factors[i]))
                G.set(factors[i], [])
            for (let j = i+1; j < factors.length; j++) {
                G.get(factors[i]).push(factors[j])
                if (!G.has(factors[j]))
                    G.set(factors[j], [])
                G.get(factors[j]).push(factors[i])
            }
        }
    }
    vertex = new Map()
    for (let i of G.keys())
        vertex.set(i, 1)
    q = []
    for (let i of G.keys()) {
        q.push(i)
        break
    }
    k = 0
    while (k < q.length) {
        v = q[k]
        k++
        vertex.set(v, 0)
        arr = G.get(v)
        for (u of arr)
            if (vertex.get(u) == 1) {
                vertex.set(u, 0)
                q.push(u)
            }
    }
    return !Array.from(vertex.values()).includes(1)
};
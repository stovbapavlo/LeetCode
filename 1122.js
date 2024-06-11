/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    arr1 = arr1.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b))
    s = new Set(arr2)
    let end = []
    while (!s.has(arr1[0])) {
        end.push(arr1.shift())
    }
    end = end.sort((a, b) => a - b)
    return [...arr1, ...end]

};



/*let map = new Map();
    let n = arr1.length
    arr2.forEach((item, index)=>{
        map.set(item, index);
    });

    return arr1.sort((a,b)=>{
        a = map.has(a) ? map.get(a) : n+a;
        b = map.has(b) ? map.get(b) : n+b;

        return a-b;
    })


    return ans;*/
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let res = 0;
    let index = 0;

    for(let num of s){
        if(num >= g[index]) res++, index++;
    }
    return res;

};
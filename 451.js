let s = "Aabb"

const charMap = s.split('').reduce((acc, cur) => {acc[cur] = (acc[cur] || 0) + 1; return acc} , {})


console.log(charMap);

const sortedArr = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);

console.log(sortedArr.reduce((acc, cur) => acc + cur.repeat(charMap[cur]), ''));
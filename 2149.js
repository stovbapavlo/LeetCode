const postiveInt = nums.filter((items) => items > 0);
const negativeInt = nums.filter((items) => items < 0);

let res = [];

for (let i = 0; i < postiveInt.length; i++) {
    res.push(postiveInt[i], negativeInt[i]);
}

return res;
/*
let arr = [5 , 2 , 0 , 3 , 1]

let newArr = [arr[0]];


for (let i = 1; i < arr.length; i++) {


    newArr.push(arr[i]^arr[i - 1]);

}
console.log(newArr);*/

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let result = [pref[0]];

    for(i = 1; i < pref.length; i ++)
    {
        result.push(pref[i] ^ pref[i - 1])
    }
    return result;
};

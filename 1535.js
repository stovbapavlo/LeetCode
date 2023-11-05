/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {

    let winner = arr[0];
    let counter = 0;
    if(k ===1)
    {
        return Math.max(arr[0], arr[1]);
    }
    if(k >= arr.length)
    {
        return Math.max(...arr);
    }

    for(let i = 1; i < arr.length; i ++)
    {
        if(winner > arr[i])
        {
            counter++;
        }
        else{
            counter = 1;
            winner = arr[i];

        }
        if(counter === k)
        {
            break;
        }
    }
    return winner;

};
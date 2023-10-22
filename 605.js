/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
//git add


var canPlaceFlowers = function(flowerbed, n) {
    let counter = 0;
    const newArr = flowerbed;
    for(let i = 0; i < newArr.length; i++ )
    {

        if(newArr[i] === 0)
        {
            if((newArr[i - 1] === 0 || newArr[i - 1] === undefined) && (newArr[i + 1]=== 0  || newArr[i + 1]=== undefined))
            {

                newArr[i] = 1;
                counter ++;

            }
        }
    }
    return n <= counter;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {

    //first solution

    /*for(let i = 0; i <= 15; i++)
    {
        let math = Math.pow(4, i);
        if(math === n)
        {
            return true;
        }
    }
    return false;*/

    //second solution

    if(n <= 0) return false;

    return (Math.log(n) / Math.log(4)) % 1 === 0;


};


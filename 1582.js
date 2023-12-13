/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {

    let result = 0;
    for(let col = 0; col < mat.length; col++){
        for(let row = 0; row < mat[0].length; row++){
            if(mat[col][row] === 1){
                let isSpecial = true;

                for (let k = 0; k < mat[0].length; k++) {
                    if (k !== row && mat[col][k] === 1) {
                        isSpecial = false;
                        break;
                    }
                }
                for (let k = 0; k < mat.length; k++) {
                    if (k !== col && mat[k][row] === 1) {
                        isSpecial = false;
                        break;
                    }
                }


                if (isSpecial) {
                    result++;
                }

            }
        }
    }
    return result;

};
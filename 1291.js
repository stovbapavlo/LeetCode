const low = 100, high = 300;

let res = [];

for(let  i = 1; i <=9; i++){
    let /**
     * @param {number} low
     * @param {number} high
     * @return {number[]}
     */
    var sequentialDigits = function(low, high) {
        let result = [];
        let sample = '123456789';
        let n = 10;

        let lowLength = low.toString().length;
        let highLength = high.toString().length;

        for (let j = lowLength; j < highLength + 1; j++) {
            for (let i = 0; i < n - j; i++) {
                let num = parseInt(sample.substring(i, i + j));
                if (num >= low && num <= high) result.push(num);
            }
        }

        return result;
    };num = i;
    for(let j = i + 1; j <=9; j++){
        num = num * 10 + j;
        console.log(num);

        if(num >= low && num <= high){
            res.push(num);
        }
    }
}
console.log(res.sort((a, b) => a - b))

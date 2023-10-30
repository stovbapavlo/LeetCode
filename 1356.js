    let arr = [0,1,2,3,4,5,6,7,8]

    let binaryArr = arr.map(dec2bin);
    binaryArr.sort();

    let sortBinary = []

    for (const binaryValue of binaryArr) {
        const decimalValue = bin2dec(binaryValue);
        sortBinary.push(decimalValue);
    }

    console.log(sortBinary);
    /*for (const binaryValue in binaryArr) {
        console.log(binaryValue);
    }*/

    function dec2bin(dec){
        return (dec >> 0.).toString(2);
    }

    function bin2dec(bin) {
        return parseInt(bin, 2);
    }



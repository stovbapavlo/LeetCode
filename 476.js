var findComplement = function(num) {
    let bin = 2
    while(bin <= num){
        bin *= 2
    }
    return bin - num - 1

};
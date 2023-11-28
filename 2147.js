/*
*
 * @param {string} corridor
 * @return {number}
var numberOfWays = function(corridor) {
    let m = 1e9 + 7;
    let seat_number = [];
    for(let i = 0; i < corridor.length; i++){
        if(corridor[i] == 'S')
            seat_number.push(i);
    }
    if(seat_number.length % 2 != 0 || seat_number.length == 0){
        return 0;
    }
    let result = 1;
    for(let i = 2; i < seat_number.length; i+= 2){
        result = (result * (seat_number[i] - seat_number[i - 1])) % m
    }
    return result;
};*/

/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    let m = 1e9 + 7;
    let zero = 0;
    let one = 0;
    let two = 1;

    for(const thing of corridor) {
        if(thing ==='S'){
            zero = one;
            [one, two] = [two, one]

        }else{
            two = (two + zero) % m
        }
    }
    return zero;
};

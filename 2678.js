let details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
/*
let res = details.map(item => {
    let num = parseInt(item.substring(11, 13))
    if (num > 60) {
        return item
    }
});*/

/*let res = details.filter(item => {
    let number = parseInt(item.substring(11, 13))
    return number > 60
})*/

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details.filter(item => {
        let number = parseInt(item.substring(11, 13))
        return number > 60
    }).length;
};

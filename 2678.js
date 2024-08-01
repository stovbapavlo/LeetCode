let details = ["7868190130M7522","5303914400F9211","9273338290F4010"]

let res = details.map(item => {
    let num = parseInt(item.substring(11, 13))
    if (num > 60) {
        return item
    }
});

console.log(res)
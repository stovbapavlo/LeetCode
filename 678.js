/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let openStack = [];
    let asteriskStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openStack.push(i);
        } else if (s[i] === '*') {
            asteriskStack.push(i);
        } else {
            if (openStack.length > 0) {
                openStack.pop();
            } else if (asteriskStack.length > 0) {
                asteriskStack.pop();
            } else {
                return false;
            }
        }
    }

    while (openStack.length > 0 && asteriskStack.length > 0) {
        if (openStack.pop() > asteriskStack.pop()) {
            return false;
        }
    }

    return openStack.length === 0;
};
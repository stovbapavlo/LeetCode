/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function Remove(input) {
        const stack = [];

        for (let i = 0; i < input.length; i++) {
            if (input[i] === '#') {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(input[i]);
            }
        }

        return stack.join('');
    }
    function Equalily(s, t)
    {
        return Remove(s) == Remove(t);
    }

    return Equalily(s, t);

};
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = []

    function isValid(segment) {
        return parseInt(segment) <= 255 && (segment === "0" || segment[0] !== "0");
    }

    function backtrack(start = 0, path = []) {
        if (path.length === 4 && start === s.length) {
            result.push(path.join('.'))
            return;
        }
        if (path.length === 4 || start === s.length) {
            return;
        }

        for (let length = 1; length <= 3; length++) {
            if (start + length <= s.length) {
                const segment = s.substring(start, start + length);
                if (isValid(segment)) {
                    path.push(segment)
                    backtrack(start + length, path);
                    path.pop();
                }
            }
        }
    }

    backtrack();
    return result;
};
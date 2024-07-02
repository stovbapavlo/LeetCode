/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function (obj, nums2) {
    for (let key in obj) {
        return false;
    }
    return true
};
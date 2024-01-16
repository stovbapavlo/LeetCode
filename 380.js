
var RandomizedSet = function() {
    this.list = [];
    this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.search = function(val) {
    return this.map.has(val);
};
/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.search(val)) return false;

    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.search(val)) return false;

    const index = this.map.get(val);
    this.list[index] = this.list[this.list.length - 1];
    this.map.set(this.list[index], index);
    this.list.pop();
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
};

var _ = require('underscore');


/**
 * @param {array} arr - The array to iterate over.
 * @description Returns the mean.
 * @example
 * ```
 * {{ [1,2,3,4] | mean }} => 2.5
 * ```
 */

function mean(arr) {
    if (_.isArray(arr)) {
        var sum = arr.reduce(function(prev, curr) {
            return prev + curr;
        }, 0);

        var len = arr.length;
        if (_.isNumber(sum) && len != 0) {
            return sum / len;
        } else {
            return 0;
        }
    } else {
        return arr;
    }
}

module.exports = mean;

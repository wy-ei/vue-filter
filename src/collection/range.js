var util = require('../util/index');
var _ = require('underscore');
/**
 *  Return a new collection from a given length
 *
 *  {{ [] | range 4 }} => [0,1,2,3]
 */

function range(arr, n) {
    util.deprecated('range', 'Because range is use to generate an array, it doesn\'t need a input, you can use _.range(n) generate an array directly.');
    return _.range(n);
}
module.exports = range;

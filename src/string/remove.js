var _ = require('underscore');
var util = require('../util/index');
/**
 * @description Removes all occurrences of a substring from a string.
 * @example
 * ```
 * {{ 'Hello JavaScript' | remove 'Hello' }} => ' JavaScript'
 * ```
 */

function remove(str, substr) {
    util.deprecated('remove', 'You can use `replace(substr, \'\')` instead of remove');
    if (_.isString(str)) {
        str = str.split(substr).join('');
    }
    return str;
}

module.exports = remove;

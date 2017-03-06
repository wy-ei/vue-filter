var _ = require('underscore');
/**
 * The split filter takes on a substring as a parameter.
 * The substring is used as a delimiter to divide a string into an array.
 *
 * {{ 'a-b-c-d' | split '-' }} => [a,b,c,d]
 */

function split(str, separator) {
    separator = separator || '';
    if (_.isString(str)) {
        return str.split(separator);
    } else {
        return str;
    }
}

module.exports = split;

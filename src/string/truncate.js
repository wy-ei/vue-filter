/**
 * @description truncate text to a specified length.
 * **notice: the length donot include the length of ellipses string, 
 * this mean the origin string will but cat to specific length and then append the ellipses string**
 * the default length is 30, default ellipses string is `'...'`
 * @example
 * ```
 * {{ 'this is a big city!' | truncate(12) }} => 'this is a bi...`
 * {{ 'this is a big city!' | truncate(12, '~~~') }} => 'this is a bi~~~`
 * ```
 */

function truncate(str, length, ellipses) {
    length = length || 30;

    if (str.length <= length) {
        return str;
    }

    if (ellipses === undefined) {
        ellipses = '...';
    }
    ellipses = '' + ellipses;

    str = str.slice(0, length);

    return str + ellipses;
}

module.exports = truncate;

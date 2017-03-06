/**
 * Prepends characters to a string.
 *
 * {{ 'world' | prepend 'hello ' }} => 'hello world'
 */

function prepend(str, prefix) {
    if (!str && str !== 0) {
        str = '';
    } else {
        str = str.toString();
    }
    return prefix + str;
}

module.exports =  prepend;

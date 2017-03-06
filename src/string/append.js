/**
 * Appends characters to a string.
 *
 * {{ 'sky' | append '.jpg' }} => 'sky.jpg'
 */

function append(str, postfix) {
    if (!str && str !== 0) {
        str = '';
    } else {
        str = str.toString();
    }
    return str + postfix;
}

module.exports = append;

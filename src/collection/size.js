/**
 * Returns the size of a string or an array.
 *
 * {{ ['a','b','c'] | size }} => 3
 * {{ 'hello' | size }} => 5
 */

function size(arr) {
    var length = arr['length'];
    return length ? length : 0;
}

module.exports =  size;

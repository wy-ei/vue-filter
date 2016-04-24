import util from '../util/index';
/**
 *  Returns the last element of an array,or last charactor of a string.
 *
 * {{ ['a','b','c'] | last }} => 'c'
 * {{ 'hello' | last }} => 'o'
 */

function last(value) {
    if (util.isArrayLike(value)) {
        return value[value.length - 1];
    } else {
        return value;
    }
}

export default last;

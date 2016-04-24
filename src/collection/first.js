import util from '../util/index';
/**
 * Returns the first element of an array,or first charactor of a string.
 *
 * {{ ['a','b','c'] | first }} => 'a'
 * {{ 'hello' | first }} => 'h'
 */

function first(value) {
    if (util.isArrayLike(value)) {
        return value[0];
    } else {
        return value;
    }
}

export default first;

import util from '../util/index';
/**
 * Returns the item at the specified index location in an array or a string.
 *
 * {{ ['a','b','c'] | at 1 }} => 'b'
 * {{ 'hello' | at 1 }} => 'e'
 */

function at(arr, index) {
    if (util.isArrayLike(arr)) {
        return arr[index];
    } else {
        return arr;
    }
}

export default at;

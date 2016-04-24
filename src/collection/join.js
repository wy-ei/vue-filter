import util from '../util/index';
/**
 * Joins the elements of an array with the character passed as the parameter.
 * The result is a single string.
 *
 * {{ ['a','b','c'] | join '-' }} => 'a-b-c'
 */

function join(arr, c) {
    if (util.isArray(arr)) {
        return arr.join(c);
    } else if (util.isArrayLike(arr)) {
        return util.toArray(arr).join(c);
    } else {
        return arr;
    }
}

export default join;

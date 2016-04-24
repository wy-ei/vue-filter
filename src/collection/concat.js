import util from '../util/index';
/**
 * Concatenates an array into another one.
 *
 * {{ [1,2,3] | concat [4,5,6] }} => [1,2,3,4,5,6]
 */

function concat(arr1, arr2) {
    if (util.isArray(arr1)) {
        if (util.isArray(arr2)) {
            return arr1.concat(arr2);
        } else {
            return arr1.concat(util.toArray(arr2));
        }
    } else {
        if (util.isArray(arr2)) {
            return util.toArray(arr1).concat(arr2);
        } else {
            return util.toArray(arr1).concat(util.toArray(arr2));
        }
    }
}

export default concat;

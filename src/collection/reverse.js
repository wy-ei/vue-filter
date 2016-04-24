import util from '../util/index';
/**
 * reverse an array or a string
 *
 * {{ 'abc' | reverse }} => 'cba'
 * {{ [1,2,3] | reverse }} => [3,2,1]
 */

function reverse(arr) {
    if (util.isArray(arr)) {
        // make a copy
        arr = arr.concat();
        return arr.reverse();
    } else if (util.isString(arr)) {
        return arr.split('').reverse().join('');
    } else {
        return arr;
    }
}

export default reverse;

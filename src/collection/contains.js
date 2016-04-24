import util from '../util/index';

/**
 * Checks if given expression or value is present in the collection
 *
 * {{ [2,3,4] | contains 3}} => true;
 *
 */

function contains(arr, item) {
    var ret = false;
    if (util.isArrayLike(arr)) {
        if (util.isFunction(item)) {
            var fun = item;
            util.each(arr, function(val) {
                if (fun(val) === true) {
                    ret = true;
                    // stop each
                    return false;
                }
            });
        } else {
            util.each(arr, function(val) {
                if (val === item) {
                    ret = true;
                    // stop each
                    return false;
                }
            });
        }
    }
    return ret;
}

export default contains;

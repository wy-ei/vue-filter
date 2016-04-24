import util from '../util/index';

function sum(arr, initial) {
    if (util.isArrayLike(arr) && !util.isString(arr)) {
        var ret = initial || 0;
        util.each(arr, function(val) {
            if (!util.isNumber(val)) {
                ret = undefined;
                // stop each
                return false;
            } else {
                ret = ret + val;
            }
        });
        return ret;
    } else {
        return arr;
    }
}

export default sum;

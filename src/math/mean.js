import util from '../util/index';
/**
 * return mean value of a array
 *
 * {{ [1,2,3,4] | mean }} => 2.5
 */

function mean(arr) {
    if (util.isArray(arr)) {
        var sum = arr.reduce(function(prev, curr) {
            return prev + curr;
        }, 0);

        var len = arr.length;
        if (util.isNumber(sum) && len != 0) {
            return sum / len;
        } else {
            return 0;
        }
    } else {
        return arr;
    }
}

export default mean;

var _ = require('underscore');
/**
 * 
 * @param {Array} list - the array to be summed.
 * @param {number} base - base value(default 0).
 * @return {number} Returns the sum.
 * @example
 * ```
 * {{ [1,2,3,4] | sum }} => 10
 * {{ [1,2,3,4] | sum 20 }} => 30
 * ```
 */

function sum(list, base) {

    if(!_.isArray(list)){
        return Number(list);
    }
    
    var ret = base || 0;
    for(var i=0;i<list.length;i++){
        var val = list[i];
        if (_.isNumber(val)) {
            ret = ret + val;
        } else {
            return NaN;
        }
    }
    return ret;
}
module.exports = sum;
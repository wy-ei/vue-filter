var util = require('../util/index');

/**
 * 
 * @param {collection} arr - the collection need be checked
 * @param {any|function} item - the element to be find. If it is a function, 
 * the function will invoked per item if the function return true, I say the array contains specific item.
 * @description Checks if given expression or value is present in the collection.
 * @example
 * ```
 * {{ [2,3,4] | contains(3)}} => true;
 * 
 * if you want you a function checked is there contains a specific item ,you should use `some` filter
 * {{ [{name: 'mj'}, {name: 'kb'}] | some((obj)=>obj.name === 'jm')}} => false
 * ```
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

module.exports= contains;

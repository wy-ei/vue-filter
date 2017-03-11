var _ = require('underscore');
/**
 * @filter at
 * @description Return the item at the specified index in an array or a string.
 * @example
 * ```
 * {{ ['a','b','c'] | at(1) }} => 'b'
 * {{ 'hello' | at(0) }} => 'h'
 * {{ 'js' | at(10) }} => undefined
 * ```
 */

function at(collection, index) {
    if(_.isArray(collection) || _.isString(collection)){
        index = Number(index);
        return collection[index];
    }
    return undefined;
}

module.exports = at;

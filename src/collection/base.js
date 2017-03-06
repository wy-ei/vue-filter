var _ = require('underscore');
var util = require('../util');


var base = {};

/**
 * @filter push, pop, shift, unshift
 * @description return a new array with those native array method. notice: those filter won't change origin array.
 * @example
 * ```
 * {{ [1,2,3] | push(4) }}  => [1,2,3,4]
 * {{ [1,2,3,4] | shift }}  => [2,3,4]
 * ```
 */
['push', 'pop', 'shift', 'unshift'].forEach(function(method) {
    base[method] = function(collection) {
        if(util.isArrayLike(collection)){
            collection = _.toArray(collection);
        }
        if(_.isArray(collection)){
            collection[method].apply(collection, _.rest(arguments));
            return collection;
        }else{
            util.type(collection, 'array');
            return collection;
        }
    };
});


/**
 * @filter slice, indexOf, concat, join
 * @description the same way with native array method.
 * @example
 * ```
 * {{ [1,2,3] | indexOf(2) }}  => 1
 * {{ [1,2] | concat([3,4]) }}  => [1,2,3,4]
 * {{ [1,2,3] | join('-) }} => '1-2-3'
 * {{ [1,2,3] | slice(1) }} => [2,3]
 * ```
 */
['slice', 'indexOf', 'concat', 'join'].forEach(function(method) {
    base[method] = function(collection) {
        if(!_.isArray(collection)){
            collection = _.toArray(collection);
        }
        return collection[method].apply(collection, _.rest(arguments));
    };
});


module.exports = base;

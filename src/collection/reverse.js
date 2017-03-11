var _ = require('underscore');
/**
 * reverse an array or a string
 *
 * {{ 'abc' | reverse }} => 'cba'
 * {{ [1,2,3] | reverse }} => [3,2,1]
 */



function reverse(collection) {
    if (typeof collection === 'string') {
        return collection.split('').reverse().join('');
    }
    if(_.isArray(collection)){
        return collection.concat().reverse();
    }
    return collection;
}

module.exports =  reverse;

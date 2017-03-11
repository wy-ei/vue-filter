var _ = require('underscore');
var util = require('../util');

/**
 *
 * @description some native method in string
 * @example
 * ```
 * {{ 'ab-cd' | replace('-', '') }}  => 'abcd'
 * {{ 'a-b-c' | split('-') }}  => ['a','b','c']
 * {{ 'javascript' | substr(0, 4) }} => 'java'
 * {{ 'javascript' | substring(0,2) }} => 'jav'
 * ```
 */

var base = {};

['replace', 'split', 'substr', 'substring'].forEach(function(method) {
    base[method] = function(str) {
        var type = typeof str;
        if (type === 'string') {
            return String.prototype[method].apply(str, _.rest(arguments));
        } else {
            util.type(method, str, 'string'.substring);
            return str;
        }
    };
});



module.exports = base;

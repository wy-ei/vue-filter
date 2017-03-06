var _ = require('underscore');
var util = require('../util');

/**
 * 
 * @deprecated
 * @description some native method in string
 * @example
 * ```
 * {{ -1.2 | abs }}  => 1.2
 * {{ 1 | acos }}  => 0
 * {{ 1.3 | ceil }} => 2
 * {{ 3 | pow 2 }} => 9  i.e: Math.pow(3,2)
 * ```
 */

var base = {};

['replace', 'split', 'trim', 'substr', 'substring', 'match'].forEach(function(method) {
    base[method] = function(str) {
        var type = typeof str;
        if (type === 'string') {
            return String.prototype[method].apply(str, _.rest(arguments));
        } else {
            util.type(method, str, 'string');
            return str;
        }
    };
});



module.exports = base;
